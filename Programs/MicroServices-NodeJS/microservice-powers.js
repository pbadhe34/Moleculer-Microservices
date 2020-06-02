const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = 3010;
const app = express();
app.use(bodyParser.json());

const powers = [
   { id: 1, name: 'flying' },
   { id: 2, name: 'teleporting' },
   { id: 3, name: 'super strengh' },
   { id: 4, name: 'clairvoyance'},
   { id: 5, name: 'mind reading' }
];

 
app.get('/powers', (req, res) => {
   console.log('Returning powers list');
   res.send(powers);
});

app.post('/powers', (req, res) => {
    console.log('Adding to powers list');  
    
    var newPower = {
      id: req.body.id,
      name: req.body.name,       
    };    

    console.log("The new power data recd is "+newPower.id +" - "+ newPower.name);
  
    powers.push(newPower);
    console.log("The new power data size is "+powers.length);     
    res.send(powers);
    });
   

console.log(`Powers service listening on port ${port}`);
app.listen(port);

