const express = require("express");
const app = express();
const configViewEngine = require("./config/configViewEngine");
configViewEngine(app);
const webRounter = require("./routes/web");
app.use(webRounter);

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
