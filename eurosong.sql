-- Create the database
CREATE DATABASE EurosongDB;
USE EurosongDB;

-- Create the 'artists' table
CREATE TABLE artists (
    artist_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

-- Create the 'songs' table
CREATE TABLE songs (
    song_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    artist_id INT,
    FOREIGN KEY (artist_id) REFERENCES artists(artist_id)
);

-- Create the 'voters' table
CREATE TABLE voters (
    voter_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

-- Create the 'votes' table
CREATE TABLE votes (
    vote_id INT PRIMARY KEY AUTO_INCREMENT,
    voter_id INT,
    song_id INT,
    points INT,
    FOREIGN KEY (voter_id) REFERENCES voters(voter_id),
    FOREIGN KEY (song_id) REFERENCES songs(song_id)
);

-- Insert some fake data into 'artists'
INSERT INTO artists (name) VALUES 
('ABBA'),
('Celine Dion'),
('Lordi'),
('Måneskin');

-- Insert some fake data into 'songs'
INSERT INTO songs (name, artist_id) VALUES 
('Waterloo', 1),
('Ne partez pas sans moi', 2),
('Hard Rock Hallelujah', 3),
('Zitti e buoni', 4);

-- Insert some fake data into 'voters'
INSERT INTO voters (name) VALUES 
('Alice'),
('Bob'),
('Charlie'),
('Diana');

-- Insert some fake data into 'votes'
INSERT INTO votes (voter_id, song_id, points) VALUES 
(1, 1, 6),
(1, 3, 4),
(2, 2, 6),
(3, 4, 2),
(4, 1, 2),
(4, 3, 6);
