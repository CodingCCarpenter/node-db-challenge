  
exports.seed = async function(knex) {
  await knex("resources").insert([
    {
      id: 1,
      name: "World Domination Tracker",
      description: "Tracks the schedule, minion daily attendance, and evil ratings"
    },
    { 
      id: 2, 
      name: "WD Minion Tracker",
      description: "Used by minions to keep track of all of their daily tasks and evil deeds" 
    },
    { 
      id: 3, 
      name: "Beauty and the Beast",
      description: "Calms minion Bob. Use only for emergencies." 
    },
    { 
      
      id: 4, 
      name: "Dora the Explorer",
      description: "Makes minion Mike angry. Watch before battle."
    }
  ]);
};