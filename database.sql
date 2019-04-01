CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "dogs" (
	"id" SERIAL PRIMARY KEY, 
	"walk_date" TIMESTAMP DEFAULT now(),
	"time_elapsed" VARCHAR,
	"ones" INTEGER,
	"twos" INTEGER,
	"user_ref_id" INTEGER REFERENCES "user"
	);