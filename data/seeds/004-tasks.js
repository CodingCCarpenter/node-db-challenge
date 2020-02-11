
exports.seed = async function(knex) {
  await knex("tasks").insert([
    { 
      id: 1, 
      description: "Steal crown jewels", 
      completed: true, project_id: 1 },
    { 
      id: 2, 
      description: "Plan Heist", 
      completed: false,
      project_id: 1 
    },
    { 
      id: 3, 
      description: "Plan to plan", 
      completed: false, 
      project_id: 1 
    },
    { 
      id: 4, 
      description: "Count coins", 
      completed: false,
      project_id: 1 
    },
    { 
      id: 5, 
      description: 
      "Kill Bill", 
      completed: false, 
      project_id: 2 
    },
    {
      id: 6,
      description: "Entertain minions",
      notes: "minions do not like Frozen!",
      completed: false,
      project_id: 2
    },
    {
      id: 7,
      description: "make lunch",
      notes: "no mayo for Dru",
      completed: false,
      project_id: 3
    },
    {
      id: 8,
      description: "Kill Bill again",
      notes: "apparent'y once wasn't enough",
      completed: false,
      project_id: 3
    }
  ]);
};