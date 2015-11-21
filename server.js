var morgan = require('morgan');
var fs = require('fs');
var express = require('express');
var csv = require('fast-csv');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(morgan('tiny'));

var vocabulary = [];

var words = csv.fromPath("analysis/data/words.csv")
words.on("data", function(data)
{
    vocabulary.push(data);
});
words.on("end", function(data)
{
    console.log(vocabulary);
})

random_page = function(request, response)
{
    var with_pictures = true
    if(Math.random() > .5)
    {
        with_pictures = false;
    }
    response.render("vocab", {words: vocabulary,
                             with_pictures: with_pictures});
}

app.get("*", random_page);
app.use(random_page);

ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
port = process.env.OPENSHIFT_NODEJS_PORT || 50000;

//  Start listening on the specific IP and PORT
app.listen(port, ipaddress, function() {
  console.log('%s: Server started on %s:%d ...', Date(Date.now()), ipaddress, port);
});