const kori = (props) => {
    let kori = "";
    let summa = 0;
    if (!props.kirjautunut) {
        summa = props.Loppusumma
    } else {
        summa = props.alehinta
    }
    if (props.tuotteidenMaara == 0) {
        kori = "Ostoskorissa ei ole tuotteita."
    } else if (props.tuotteidenMaara == 1) {
        kori = "Ostoskorissa on " + props.tuotteidenMaara + " tuote. Loppusumma on " + summa + "€"
    } else {
        kori = "Ostoskorissa on " + props.tuotteidenMaara + " tuotetta. Loppusumma on " + summa + "€"
    }
    return (
        <kori style={{
            display: "flex",
            justifyContent: "end",
            gap: "32px"
        }}>
            <h2 style={{
                marginLeft: "100px"
            }}>
                {kori}
            </h2>
            {props.tuotteidenMaara > 0 &&
                <button
                    style={{
                        padding: "10",
                        height: "40px",
                        alignSelf: "center",
                        borderRadius: "5px",
                        boxShadow: "4px 4px 4px #272829",
                        marginRight: "20px"
                    }}
                    onClick={() => {
                        alert("Jatketaan tilaukseen...")
                    }}>
                    Tilaa tuotteet!
                </button>}
        </kori>
    );
}
export default kori