
const demoController = {
    get: (req, res) => {
        res.sendStatus(501)
    },
    getAll: (req, res) => {
        res.sendStatus(501)
    },
    // todo: endpoint qui crache (db pas connectée, le serveur n'a pas répondu, le fichier n'existe pas) ==> en dehors du contrôle de ton code
    danger: (req, res) => {
        // Provoquer une erreur
        throw new Error("Boum ! Ca crash !!! 💣");
    }
}

export default demoController;