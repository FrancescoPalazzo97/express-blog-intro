const express = require(`express`);
const app = express();
const port = 3000;

const posts = [
    {
        title: "Come imparare JavaScript",
        content: "Guida pratica per iniziare con JavaScript dalle basi fino ad argomenti avanzati come async/await e DOM manipulation.",
        img: "/img/js-photo.jpg",
        tags: ["programmazione", "javascript", "web development"]
    },
    {
        title: "Ricetta: Pasta alla Carbonara",
        content: "La vera ricetta tradizionale romana con guanciale, pecorino, uova e pepe nero.",
        img: "/img/carbonara-photo.jpg",
        tags: ["cucina", "ricette", "italiana"]
    },
    {
        title: "Viaggio a Kyoto",
        content: "Itinerario di 5 giorni tra templi, giardini zen e cucina giapponese autentica.",
        img: "/img/kyoto-photo.jpg",
        tags: ["viaggi", "giappone", "asia"]
    },
    {
        title: "Introduzione a React",
        content: "Come costruire la tua prima applicazione con React, componenti e stato.",
        img: "/img/react-photo.jpg",
        tags: ["react", "frontend", "javascript"]
    },
    {
        title: "Consigli per il fitness a casa",
        content: "Allenamenti efficaci senza attrezzi, dedicati a chi lavora da remoto.",
        img: "/img/fitness-photo.jpg",
        tags: ["fitness", "salute", "esercizi"]
    }
];

app.use(express.static(`public`));

app.get('/', (req, res) => {
    res.send(`Server del mio blog`);
})

app.get(`/bacheca`, (req, res) => {
    res.json(posts);
})

app.listen(port, () => {
    console.log(`Server del mio blog`)
})