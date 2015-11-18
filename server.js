var morgan = require('morgan');
var fs = require('fs');
var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(morgan('tiny'));

random_page = function(request, response)
{
    if(Math.random() > .5)
    {
        response.render("picture", {});
    }
    else
    {
        response.render("words", {});
    }
}

app.get("*", random_page);
app.use(random_page);

ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
port = process.env.OPENSHIFT_NODEJS_PORT || 50000;

//  Start listening on the specific IP and PORT
app.listen(port, ipaddress, function() {
  console.log('%s: Server started on %s:%d ...', Date(Date.now()), ipaddress, port);
});