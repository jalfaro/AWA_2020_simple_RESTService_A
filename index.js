const express = require('express');
const app = express();
app.use(express.json());
let comics = [
    {id: 1, nombre : "Batman", editorial: "DC"},
    {id: 2, nombre : "Avengers", editorial: "Marvel"},
    {id: 3, nombre : "Xmen", editorial: "Marvel"},
    {id: 4, nombre : "Superman", editorial: "DC"}
];
app.get("/", (req, res) => {
    res.send("Hola Mundo");
});

app.get("/comic", (req, res) => {
    res.send(comics);
});

app.get("/comic/:id", (req, res) => {
    let comic = comics.find(c => c.id === parseInt(req.params.id));
    if (!comic) res.status(404).send("No existe ese id");
    res.send(comic);
});

app.post("/comic", (req, res) => {
    let comic = req.body;
    comic.id = comics.length + 1;
    comics.push(comic);
    res.send(comic);
});

app.listen(3010, () => {
    console.log("Servidor corriendo en puerto 3010");
});
