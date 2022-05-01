const app = require('./src/app')

app.listen(process.env.PORT, () => {
    console.log(`Started on http://localhost:${process.env.PORT}`);
  });