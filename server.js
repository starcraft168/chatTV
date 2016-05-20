
var express = require('express');

var path = require('path');

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './client')));
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


// require('./server/config/routes.js')(app);

app.listen(3000, function() {
	console.log('listening to port 3000');
});
