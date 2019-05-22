use bucket_list;
db.dropDatabase();

db.bucket_list.insertMany([
  {
    task: "Eat a ham sandwich",
    difficulty: "low",
    date: "2019-02-15",
    completed: "false"
  },
  {
    task: "Climb a munro",
    difficulty: "medium",
    date: "2019-02-16",
    completed: "false"
  },{
    task: "Win the lottery",
    difficulty: "high",
    date: "2019-04-15",
    completed: "false"
  },{
    task: "Eat caviar",
    difficulty: "high",
    date: "2019-05-15",
    completed: "false"
  }

]);
