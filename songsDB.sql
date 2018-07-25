DROP DATABASE IF EXISTS songs_db;

CREATE DATABASE songs_db;

USE songs_db;

CREATE TABLE songs (
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(50) NOT NULL,
    artist VARCHAR(50) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT songs (title, artist, genre)
VALUES ("Rigormortis", "Kendrick Lamar", "Rap"),
("Bleach", "Brockhampton", "Rap"),
("Where The Giants Roam", "Thundercat", "Jazz"),
("Changing Of The Guard", "Kamasi Washington", "Jazz"),
("F.C.P.R.E.M.I.X.", "Fall Of Troy", "Post Alt"),
("Perfect Pillow", "CHON", "Post Alt"),
("Chinchilla", "TTNG", "Math Rock"),
("Sea Dragon", "Covet", "Math Rock"),
("Money Trees", "Kendrick Lamar", "Rap"),
("Hold Up", "Kendrick Lamar", "Rap"),
("Never Meant", "American Football", "Math Rock"),
("Cat Fantastic", "TTNG", "Math Rock"),
("Echolocation", "LITE", "Math Rock"),
("Prima Donna","Vince Staples","Rap"),
("Puddle","CHON","Post Alt")