
exports.seed = async function(knex) {
  await knex("projects").insert([
    { 
      id: 1, 
      name: "Take over the world" 
    },
    { 
      id: 2, 
      name: "Take it slow" 
    },
    {
      id: 3,
      name: "Find the sorcerer's Stone",
      description: "Use the Mirror of Erised to find the stone."
    }
  ]);
};