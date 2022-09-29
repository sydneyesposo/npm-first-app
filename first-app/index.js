const express = require('express');

const app = express(); //function express
//console.dir(app);
app.use(() => { //method ; app.use will run for ALL OF THE REQUEST COMING IN
    console.log("New request");
});

//app.listen will always at the end of the code
app.listen(3000, () => { //port 3000 
    console.log(`Listening on port 3000`)
    
  });
