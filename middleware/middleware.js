const Projects = require("../data/helpers/projectsModel.js");

const validateName = (req, res, next) => {
    if (!req.body.name) {
        res.status(400)({ message: "Name field is required" });
    } else {
        next();
    }
};

const validateDescription = (req, res, next) => {
    if (!req.body.description) {
        res.status(400)({ message: "Description field is required" });
    } else {
        next();
    }
};

const validateProjectId = (req, res, next) => {
    if (!req.body.project_id) {
        res.status(400).json({ message: "Project id is missing" });
    } else {
        Projects.findById(req.body.project_id)
        .then((project) => {
            if(!project) {
                res.status(404).json({
                    message: "Invalid project id"
                });
            } else {
                req.project = project;
                next();
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Failed to retrieve the project you wanted"});
        });
    }
};

module.exports = { validateName, validateDescription, validateProjectId};
