import { useState } from 'react';
const Ylapalkki = ({ kirjautunut, setKirjautunut, kirjaudu }) => {

    const [kayttis, setKayttis] = useState("")
    const [salis, setSalis] = useState("")

    return (
        <header style={{
            backgroundColor: "whitesmoke",
            display: "flex",
            justifyContent: "end",
            padding: "10px",
            alignItems: "center",
        }}>
            <div style={{
                marginRight: "auto",
                fontFamily: "Brush Script MT",
                fontSize: "40px",
                textShadow: "5px 5px 5px #272829"
            }}>
                T-paita verkkokauppa
            </div>
            {!kirjautunut ? <div style={{
                display: "flex",
                gap: "10px"
            }}>
                <input type="text"
                    placeholder="Username"
                    size={15}
                    value={kayttis}
                    onChange={(e) => {
                        setKayttis(e.target.value)
                    }} />
                <input type="password"
                    placeholder="Password"
                    size={15}
                    value={salis}
                    onChange={(e) => {
                        setSalis(e.target.value)
                    }}
                />
                <button
                    style={{
                        padding: "10px",
                        marginLeft: "10px",
                        boxShadow: "4px 4px 4px #272829"
                    }}
                    onClick={() => {
                        kirjaudu(kayttis, salis)
                    }}>
                    Sign in
                </button>
            </div>
                : <div> Olet kirjautunut sisään tunnuksella: testi
                    <button
                        style={{
                            padding: "10px",
                            marginLeft: "10px",
                            boxShadow: "4px 4px 4px #272829"
                        }}
                        onClick={() => {
                            setKirjautunut(false)
                            setKayttis("")
                            setSalis("")
                        }}
                    >Kirjaudu ulos
                    </button>
                </div>
            }
        </header>
    );
}
export default Ylapalkki;