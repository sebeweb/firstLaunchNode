var express = require('express');
var appli = express();



appli.get(
        '/',
        function (request, response) {
            response.send('salut');
        }
);

appli.get(
        '/user',
        function (request, response) {
            var retour = {
                "nom": "oui",
                "prenom": "oui"
            };
            response.json(retour);
        }
);

appli.listen('536', function () {
    console.log("j écoute");
});