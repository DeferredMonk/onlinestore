import { useState } from 'react';
import Grid from './Grid';

const tuotteet = (props) => {

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gridGap: "100px",
            padding: "20px 0px 100px",
            justifyContent: "center"
        }}>
            <Grid kuva="/oispa_kaljaa.jpg"
                nimi="Oispa Kaljaa"
                hinta="0"
                korinMaara={props.korinMaara}
                kirjautunut={props.kirjautunut} />
            <Grid kuva="/superpower.jpg"
                nimi="Superpaita"
                hinta="9000"
                korinMaara={props.korinMaara}
                kirjautunut={props.kirjautunut} />
            <Grid kuva="/eatsleepcode.jpg"
                nimi="Code beater"
                hinta="100"
                korinMaara={props.korinMaara}
                kirjautunut={props.kirjautunut} />
            <Grid kuva="/offline.webp"
                nimi="Offline"
                hinta="20"
                korinMaara={props.korinMaara}
                kirjautunut={props.kirjautunut} />
            <Grid kuva="/condom.jpg"
                nimi="Älykäs"
                hinta="5"
                korinMaara={props.korinMaara}
                kirjautunut={props.kirjautunut} />
            <Grid kuva="/gorilla.jpg"
                nimi="Served"
                hinta="45"
                korinMaara={props.korinMaara}
                kirjautunut={props.kirjautunut} />
        </div>
    );
}
export default tuotteet;