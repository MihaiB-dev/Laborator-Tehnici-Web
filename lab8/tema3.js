
const express = require('express');
const app = express();

function delayMiddleware(req, res, next) {
    const delayTime = req.query.delay;
  
    if (!delayTime) {
      // Dacă query parameter-ul delay nu există, nu se aplică niciun delay
      return next();
    }

    setTimeout(() => {next();}, delayTime);
  }


app.use(delayMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);