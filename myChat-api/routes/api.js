const express = require('express');
const router = express.Router();


// On veut que l'user "/" requêtée avec la méthode HTTP GET nous renvoie de la donnée
// req est la requête express où on peut avoir tout un tas d'informations sur les headers, le body de la requête, les cookies ect.
// res est la réponse express qui sera utilisée pour renvoyer ce qu'on veut et en l'occurrence ici un object json grâce à l'instruction res.json
// next est une fonction du routeur Express qui, lorsqu'elle est invoquée, exécute le middleware qui succède au middleware actuel. On l'utilisera plus tard
router.get('/', function (req, res, next) {

    // If faut penser le res.json(...) comme un "return" pour retourner la réponse avec de la donnée en retour,
    // s'il n'y a pas de res.json la réponse ne pourra jamais se finir, car le code ne saura pas quoi faire pour "libérer" la réponse
    res.json({
        status: "done",
        timestamp: Date.now()
    });
});

// Route pour avoir mon prénom
router.get('/login', function (req, res, next) {
    res.json("Login page");
});

// Route pour envoyer une chaine quelconque
router.get('/signin', function (req, res, next) {
    res.json("Register page");
})



// Le paramètre ou slug peut avoir à peu près n'importe quel nom
// et doit être forcement précédé de ': puis une chaine de caractère sans espaces
router.get('/profil', function (req, res, next) {
    // Pour accèder au paramètre on peut le retrouver directement dans les
    // paramètres de la requête
    res.json("Page de profil");
});



// Utilisé pour exporter le router comme module
module.exports = router;