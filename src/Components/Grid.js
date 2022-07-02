
const grid = ({ kuva, hinta, nimi, korinMaara, kirjautunut }) => {
    let alehinta = hinta
    if (kirjautunut) {
        alehinta = parseInt(hinta) * 0.8
    }
    return (
        <div style={{
            width: "300px",
            height: "500px",
            border: "1px solid black",
            borderRadius: "10px",
            boxShadow: "10px 6px 6px #272829",
        }}>
            <img src={kuva}
                style={{
                    width: "250px",
                    margin: "25px",
                    borderRadius: "10px"
                }} />
            <h4 style={{
                textAlign: "center"
            }}>
                {nimi}
            </h4>
            <h2 style={{
                textAlign: "center"
            }}>{alehinta}€</h2>
            <button style={{
                padding: "10px",
                borderRadius: "5px",
                marginLeft: "100px",
                boxShadow: "4px 4px 4px #272829",
            }}
                onClick={() => {
                    korinMaara(parseInt(hinta))
                }}>
                Lisää koriin!
            </button>
        </div>

    );
}
export default grid;