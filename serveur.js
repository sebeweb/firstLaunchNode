var express = require('express');
var appli = express();



appli.get(
        '/',
        function (request, response) {
            response.sendFile(__dirname+'/views/index.html');
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

appli.listen(process.env.PORT||'536', function () {
    console.log("j écoute");
});