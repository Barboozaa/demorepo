var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "songs_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

inquirer.prompt([
  {
    type: "list",
    message: "What do you want to Do?",
    name: "action",
    choices: ["Add a song", "Delete a song", "Update a song", "Show all songs"]
  }
]).then();

function addSong() {
  var query = connection.query(
    "INSERT INTO songs SET ?",
    {
      title: "Roar",
      artist: "Katy Perry",
      genre: "Pop"
    },
    function(err, res) {
      if (err) return console.log(err)
    }
  )
};

function deleteSong() {
  var query = connection.query(
    "DELETE FROM songs WHERE ?",
    {
      title: "Hold Up"
    },
    function(err, res) {
      if (err) return console.log(err);
    }
  )
};

function updateSong() {
  var query = connection.query(
    "UPDATE songs SET ? WHERE ?",
    [
      {
        title:"High (feat. Danny Brown)"
      },
      {
        title: "High"
      }
    ],
    function(err, res) {
      if (err) return console.log(err);
    }
  );
};

function readSongs() {
  connection.query("SELECT * FROM songs", function(err, res) {
    if (err) throw err;
    console.log(res);
  });
};