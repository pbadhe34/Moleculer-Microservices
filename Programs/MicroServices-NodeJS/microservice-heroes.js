const express = require('express');
var httpModule = require('http');

const https = require("https");

const path = require('path');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();
app.use(bodyParser.json()); 
 

const heroes = [
   {
       id: 1,
       type: 'super-dog',
       displayName: 'The Rex',
       powers: [1, 4],
       img: 'dog.jpg',
       busy: false
   },
   {
       id: 2,
       type: 'super-horse',
       displayName: 'Peter Pan',
       powers: [2, 5],
       img: 'horse.jpg',
       busy: false
   },
   {
       id: 3,
       type: 'super-cat',
       displayName: 'Tom',
       powers: [3, 2],
       img: 'cat.jpg',
       busy: false
   },
   {
       id: 4,
       type: 'super-hamster',
       displayName: 'Jerry',
       powers: [1, 5],
       img: 'hamster.jpg',
       busy: false
   }
];

app.get('/heroes', (req, response) => {
   console.log('Returning heroes list');

  var msg = "";  
  var data="";

  var options = {
  host: 'localhost',
  port: '3010',
  path: '/powers',
  method: 'GET'   
};

//Get the 'hero.powers' values from '/powers' service correseponding to the heroes and assign and return it.

  httpModule.get(options, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    msg += data;
  });
  res.on("end", () => {
    powerBody = JSON.parse(msg);
    console.log(powerBody);

    //Create dummyHeroes array to send as response to client
     var dummyHeroes = [];
     heroes.forEach(hero => {
        var localHero={};
        localHero.id=hero.id;
        localHero.type=hero.type;         
        localHero.displayName=hero.displayName;
        localHero.img=hero.img;
        localHero.busy=hero.busy;
        localHero.powers=hero.powers;

        dummyHeroes.push(localHero);

});

    //Process Heroes powesr and send
   dummyHeroes.forEach(hero => {
     console.log("hero "+hero.displayName);
      heroPOwers = [];
      hero.powers.forEach(powerIndex => {
         console.log("hero power is"+powerIndex);          
          
       obj = powerBody.find(item => item.id === powerIndex );

       console.log("Matching Power value from powers service url  is "+obj.name);

       //add the string value to Hero powers array
        heroPOwers.push(obj.name);  
     });

       console.log("size of heros powers "+hero.powers.length);
       hero.powers = heroPOwers;
       console.log(hero.powers);
         
    });
    
    response.send(dummyHeroes);
  });
});
   
});

 

//Find and return the hero record with power value and set the attributes from request body parameters.

//http://localhost:3000/hero/id Where id =1 with request json data as Hero attributes

app.post('/hero/**', (req, res) => {
   const heroId = req.params[0];
   const foundHero = heroes.find(subject => subject.id == heroId);

   if (foundHero) {
       for (let attribute in foundHero) {
           if (req.body[attribute]) {
               foundHero[attribute] = req.body[attribute];
               console.log(`Set ${attribute} to ${req.body[attribute]} in hero: ${heroId}`);
           }
       }
       res.status(202).header({Location: `http://localhost:${port}/hero/${foundHero.id}`}).send(foundHero);
   } else {
       console.log(`Hero not found.`);
       res.status(404).send();
   }
});

app.use('/img', express.static(path.join(__dirname,'img')));

console.log(`Heroes service listening on port ${port}`);
app.listen(port);

