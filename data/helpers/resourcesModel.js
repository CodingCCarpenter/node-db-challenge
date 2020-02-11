const db = require("../dbConfig.js");

//GET all of the resources
const find = () => {
    return db("resources");
};

//GET a resouce by its Id
const findById = (id) => {
    return db("resources")
    .where({ id })
    .first();
};

//GET a resource by associated project_id
const findByProjectId = (id) => {
    return db("resources")
    .join(
        "projects_resources",
        "resources.id", 
        "projects_resources.resource_id"
    )
    .where("projects_resources.project_id", id)
    .select(
        "resources.id", 
        "resources.name", 
        "resources.description"
    );
}

//POST- Add a new resources
const add = async (resource) => {
    const [id] = await db("resources").insert(resource);

    return findById(id);
};

module.exports = { find, findById, findByProjectId };