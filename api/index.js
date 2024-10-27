const express = require ("express");
const app = express();

app.use(express.json());

const students = [
    {id:1, name: "mike", age: 28, enroll: true},
    {id:2, name: "juan", age: 23, enroll: false},
    {id:3, name: "benito", age: 25, enroll: true}
];

app.get('/', (req,res) => {
    res.send('Node JS api');
})

app.get('/api/students', (req,res) => {
    res.send(students);
})

app.get('/api/students/:id', (req,res) => {
    const student = students.find(c => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('estudiante no encontrado');
    else res.send(student);
})

app.post('/api/students/', (req,res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age),
        enroll: (req.body.enroll === 'true')
    };

    students.push(student);
    res.send(student);
})

app.delete('/api/students/:id', (req,res) => {
    const student = students.find(c => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send("estudiante no encontrado");

    const index = students.indexOf(student);
    students.splice(index,1);
    res.send(student);
})

const port = process.env.port || 3000;
app.listen(port, () => console.log(`listening port ${port}`));