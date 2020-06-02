 
To start with defaut local sb
>npm run dev

The services exposed with urls

Get : http://localhost:3000/api/users


POST : http://localhost:3000/api/users  , add new data

POST : http://localhost:3000/api/login  with payload{"email":"don@het.net","password":"MyPass123"}

Get user with id : http://localhost:3000/api/users/kPhpdmYNWlD8JzsL

Put user update with id : http://localhost:3000/api/users/kPhpdmYNWlD8JzsL

Delete user record
http://localhost:3000/api/users/kPhpdmYNWlD8JzsL

Get user profile with id : http://localhost:3000/api/profiles/don

 {
  "profile": {
    "_id": "BO04gT2NdyZjuiDv",
    "username": "don",
    "email": "don@het.net",
    "bio": "",
    "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
    "following": false
  }
}

 

#### MongoDB persistent store
Basically the services stores data in an NeDB persistent file storage in the `./data` folder. If you have to use MongoDB, set the `MONGO_URI` environment variable.

Create a new Database named as 'conduit' in mongodb via mongoDb Compass.

```
MONGO_URI=mongodb://localhost/conduit

>set MONGO_URI=mongodb://localhost/conduit

```

#### Multiple instances
You can run multiple instances of services. 
Moleculer uses TCP transporter to communicate all instances. 
No need any additional configuration, it uses UDP for discovery.

  
## Code Overview

 
### Application Structure

- `moleculer.config.js` - Moleculer ServiceBroker configuration file.
- `services/` - This folder contains the services.
- `public/` - This folder contains the front-end static files.
- `data/` - This folder contains the NeDB database files.

## Test

 
$ npm test
```

In development with watching

```
$ npm run ci```

 

 