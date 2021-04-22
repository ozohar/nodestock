const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

const port = process.env.port || 5000;
//set HB midleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get('/', function(req, res) {
    res.render('home', {
        stuff: "test the stuff..."
    });
});

// set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => console.log('server listening on port '+ port))