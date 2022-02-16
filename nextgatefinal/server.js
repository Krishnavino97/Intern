const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 3000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});


// Require current cultivation routes
const currentCultivationRoutes = require('./src/routes/current.cultivation.routes')
// using as middleware
app.use('/api/v1/currentcultivation', currentCultivationRoutes)
// listen for requests




// Require lottable routes
const LotTableRoutes = require('./src/routes/lottable.routes')
// using as middleware
app.use('/api/v1/lottable', LotTableRoutes)



app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


