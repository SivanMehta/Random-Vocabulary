var morgan = require('morgan');
var fs = require('fs');
var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(morgan('tiny'));

random_page = function(request, response)
{
    // var with_pictures = true
    // if(Math.random() > .5)
    // {
    //     with_pictures = false;
    // }
    // response.render("vocab", {with_pictures: with_pictures});

    if(Math.random() > .5)
    {
        // link with picture
        response.redirect("https://docs.google.com/document/d/1Ybw0klO-uKLbFEMtbRPa98oc2hiYRDQkIzT672OARG0/edit");
    }
    else
    {
        response.redirect("https://docs.google.com/document/d/1R6i4OmZTPXCfhNMle0R9jOULbELa2EfhJuaQrDsEPgE/edit");
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