--Created table for client contact form
CREATE TABLE clients (
id SERIAL PRIMARY KEY,
first_name VARCHAR (100) NOT NULL,
last_name VARCHAR (100) NOT NULL,
subject VARCHAR (100) NOT NULL,
message VARCHAR (500)
);

--Created table to hold pictures for carousels.
CREATE TABLE pictures (
pics VARCHAR (30)
);
