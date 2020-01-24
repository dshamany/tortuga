const Crew = require('../models/crew');

module.exports = {
    getCrew,
    createCrew,
    remove,
}


function getCrew(req, res){
    Crew.find({postRef: req.params.id}, (err, crew) => {
        if (err) res.status(404).json(err);
        res.json(crew);
    });
}

function createCrew(req, res){
    let person = new Crew(req.body);
    person.save((err, newPerson) => {
        if (err) res.status(404).json(err);
        res.json(newPerson);
    });
}

function remove(req, res){
    let postCrew = Crew.deleteMany({postRef: req.params.id}, (err, deleted) => {
        if (err) res.status(404).json(err);
        res.json(deleted);
    });
}
