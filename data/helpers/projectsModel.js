const db = require("../dbConfig.js/index.js.js");

//GET all of the projects
const find = () => {
    return db("projects");
};

//GET one project by ID
const findById = (id) = {
    return db("projects")
        .join(
            "tasks", 
            "projects.id", 
            "tasts.project_id"
        )
        .join(
            "projects_resources", 
            "projects.id", 
            "projects_resources.project_id"
        )
        .join(
            "resources", 
            "projects.id", 
            "projects_resources.project_id"
        )
        .join(
            "resources", 
            "projects_resources.resource_id", 
            "resources.id"
        )
        .select(
            "project.id", 
            "project.name", 
            "project.description", 
            "project.completed", 
            "tasks.id as task_id",
            "tasks.description as tasks_description", 
            "tasks.notes as tasks_notes",
            "tasks.completed as tasks_completed", 
            "resources.id as resource_id",
            "resources.name as resource_name",
            "resources.description as resource_description"
        )
        .where({ id })
        .first();
};

//POST a new project
const add = async(project) => {
    const [id] = await db("projects").insert(project);

    return findById(id);
};

module.exports = { find, findById, add };