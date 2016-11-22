--Created table for client contact form
CREATE TABLE clients (
id SERIAL PRIMARY KEY,
first_name VARCHAR (100) NOT NULL,
last_name VARCHAR (100) NOT NULL,
email VARCHAR (30) NOT NULL,
subject VARCHAR (100) NOT NULL,
message VARCHAR (500)
);

--Created table to hold pictures for carousels.
CREATE TABLE pictures (
pics VARCHAR (30)
);

--GET all information for tables
SELECT * FROM clients;

--Need to organize database using user email
SELECT * FROM notes Join....

--email is common factor in both tables
WHERE client.email = 
