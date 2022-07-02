const jalka = () => {
    return (
        <footer style={{
            backgroundColor: "whitesmoke",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
        }}>
            <div style={{
                width: "100px"
            }}>
                <h4 style={{
                    marginBottom: "0"
                }}>
                    Osoite:
                </h4>
                <p style={{
                    marginLeft: "5px",
                    marginTop: "0px"
                }}>
                    muusistie 18
                    00000
                    Turku
                </p>
            </div>
            <div style={{
                width: "250px",
            }}>
                © 2022 Marcello T-shirt Company.
                All Rights Reserved.
            </div>
        </footer>
    );
}
export default jalka