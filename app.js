const express = require(`express`);
const app = express();
const port = 3000;

app.use(express.static(`public`));

app.get('/', (req, res) => {
    res.send(`Server del mio blog`);
})

app.get(`/bacheca`, (req, res) => {

    const posts = [
        {
            title: "Come imparare JavaScript",
            content: "Guida pratica per iniziare con JavaScript dalle basi fino ad argomenti avanzati come async/await e DOM manipulation.",
            img: "img/js-photo.jpeg",
            tags: ["programmazione", "javascript", "web development"]
        },
        {
            title: "Ricetta: Pasta alla Carbonara",
            content: "La vera ricetta tradizionale romana con guanciale, pecorino, uova e pepe nero.",
            img: "img/carbonara-photo.jpeg",
            tags: ["cucina", "ricette", "italiana"]
        },
        {
            title: "Viaggio a Kyoto",
            content: "Itinerario di 5 giorni tra templi, giardini zen e cucina giapponese autentica.",
            img: "img/kyoto-photo.jpeg",
            tags: ["viaggi", "giappone", "asia"]
        },
        {
            title: "Introduzione a React",
            content: "Come costruire la tua prima applicazione con React, componenti e stato.",
            img: "img/react-photo.jpeg",
            tags: ["react", "frontend", "javascript"]
        },
        {
            title: "Consigli per il fitness a casa",
            content: "Allenamenti efficaci senza attrezzi, dedicati a chi lavora da remoto.",
            img: "img/fitness-photo.jpeg",
            tags: ["fitness", "salute", "esercizi"]
        }
    ];

    res.json(posts);

})

app.listen(port, () => {
    console.log(`Server del mio blog`)
})