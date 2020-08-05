var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use('/html', express.static(__dirname+'/html'));
app.get('/', function (req, res, next) {
    console.log("on demande index.html");
    res.redirect('/html/index.html');
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

exports.insererNom = function(nom){
    return "bonjour "+nom;
}

app.post('/insererNom', function (req, res, next) {
    var nom = req.body.nom;
    console.log("variable nom : "+nom);
    //var testNom = insererNom(nom); //Pour les tests unitaires
    res.send('{"nom":"'+nom+'"}');
});




app.listen(8282, function () {
    console.log("simple express node server listening at 8282");
});
