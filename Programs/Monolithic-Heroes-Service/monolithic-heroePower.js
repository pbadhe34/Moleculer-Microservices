const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = 3040;
const app = express();
app.use(bodyParser.json());
 

const heroes = [
   {
       id: 1,
       type: 'super-dog',
       displayName: 'The Rex',
       powers: ['flying', 'mind reading'],
       img: 'dog.jpg',
       busy: false
   },
   {
       id: 2,
       type: 'super-horse',
       displayName: 'Horse Man',
       powers: ['super strength'],
       img: 'horse.jpg',
       busy: false
   },
   {
       id: 3,
       type: 'super-cat',
       displayName: 'Tom',
       powers: ['telereporting', 'clairvoyance'],
       img: 'cat.jpg',
       busy: false
   },
   {
       id: 4,
       type: 'super-hamster',
       displayName: 'Jerry',
       powers: ['flying', 'super-power'],
       img: 'hamster.jpg',
       busy: false
   }
];

app.get('/heroes', (req, res) => {
   console.log('Returning Monolithik heroes list');
   res.send(heroes);
});
 

//Find and return the hero record with power value and set the attributes from request body parameters.


app.post('/hero/**', (req, res) => {
   const heroId = req.params[0];
   const foundHero = heroes.find(subject => subject.id == heroId);

   if (foundHero) {
       for (let attribute in foundHero) {
           if (req.body[attribute]) {
               foundHero[attribute] = req.body[attribute];
               console.log(`Monolithik  Hero Set ${attribute} to ${req.body[attribute]} in hero: ${heroId}`);
           }
       }
       res.status(202).header({Location: `http://localhost:${port}/hero/${foundHero.id}`}).send(foundHero);
   } else {
       console.log(`Monolithik Hero not found.`);
       res.status(404).send();
   }
});

app.use('/img', express.static(path.join(__dirname,'img')));

console.log(`The Monolithik Heroes service listening on port ${port}`);
app.listen(port);

