import { useState } from 'react'
import Header from './Components/VerkkokauppaHeader';
import Footer from './Components/VerkkokauppaFooter';
import Tuotteet from './Components/Container';
import Kori from './Components/Ostoskori';
function App() {

  const [maara, setMaara] = useState(0);
  const [Loppusumma, setLoppuSumma] = useState(0);
  const [alehinta, setAlehinta] = useState(0)
  const [kirjautunut, setKirjautunut] = useState(false)
  const kirjaudu = (username, password) => {
    if (username == "testi" && password == "testi") {
      setKirjautunut(true)
    }
  }

  const korinMaara = (hinta) => {
    setMaara(maara + 1);
    setLoppuSumma(Loppusumma + hinta)
    setAlehinta(alehinta + (hinta * 0.8))
  }
  return (
    <div>
      <Header kirjautunut={kirjautunut}
        kirjaudu={kirjaudu}
        setKirjautunut={setKirjautunut} />
      <Kori tuotteidenMaara={maara}
        Loppusumma={Loppusumma}
        alehinta={alehinta}
        kirjautunut={kirjautunut} />
      <Tuotteet korinMaara={korinMaara}
        kirjautunut={kirjautunut} />
      <Footer />
    </div>
  );
}

export default App;
