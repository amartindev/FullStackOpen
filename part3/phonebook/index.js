const express = require("express");
const app = express();
// const morgan = require("morgan");

// app.use(express.json());
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms :postData'));

// morgan.token("postData", (req) => {
//     if (req.method === "POST") {
//       return JSON.stringify(req.body);
//     }
//   });

app.use(express.static('build'))

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1,
    },
    {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2,
    },
    {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3,
    },
    {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4,
    },
];

app.get("/api/persons/", (request, response) => {
    response.json(persons);
});

app.get("/api/persons/info", (request, response)=> {
    const size = persons.length;
    const date = new Date();
    response.send(`
        <p>Phonebook has info for ${size} people</p>
        <p>${date}</p>
        `)
});

app.get("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    const person = persons.find((person) => person.id === id);
    if (person) {
        response.json(person);
    } else {
        response.status(404).end();
    }
});

app.delete("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    persons = persons.filter((person) => person.id !== id);

    response.status(204).end();
});

const generateId = () => {
    return Math.floor(Math.random() * 1000);
};

app.post("/api/persons", (request, response) => {
    const body = request.body;

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: "content missing",
        });
    } else if (persons.some(person => person.name === body.name)){
        return response.status(400).json({
            error: "name must be unique",
        });
    }
    const person = {
        name: body.name,
        number: body.number,
        id: generateId(),
    };
    persons = persons.concat(person);
    response.json(person);
});


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
