const db = require("../dbConfig.js");

//GET all of the projects
const find = () => {
    return db("projects");
};

//GET a single project by Id
const findById = (id) => {
    return db("projects")
        .where("projects.id", id)
        .first();
};

//POST a new project
const add = async(project) => {
    const [Id] = await db("projects").insert(project);

    return findById(id);
};

module.exports = { find, findById, add };