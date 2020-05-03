# Formula 1 Driver Tweet API

This API contains a list of web socket endpoints that can be publicly accessed. Each end point rebroadcasts tweets mentioning a specific driver or their team.

### Available Endpoints 

- ws://f-one-tweets-server.herokuapp.com/api/v1/f1/general
- ws://f-one-tweets-server.herokuapp.com/api/v1/f1/max
- ws://f-one-tweets-server.herokuapp.com/api/v1/f1/lewis

### Available Scripts

In the project directory, you can run:

#### `npm start`
Start the server.

#### `npm start:watch`
Start the server with hot reload using nodemon.

#### `npm test`
Run all test suites.

#### `npm test:watch`
Run all test suites with hot reload.


### Tech Stack
   - Node
   - Express/ExpressWs
   - MongoDB (?)
   - Heroku/Travis CI



### Example
Please check the example of the demo build in React [here](https://github.com/Zilula/f-one-tweets-client).



### TODO
   1. Remove dead code
   2. Add (better) error handling 
   3. Expand number of endpoints dynamically
   4. Write tests for each websocket

### Disclaimer
   Everyone is liable for their own use. 