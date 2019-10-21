DROP DATABASE IF EXISTS "linkedin_dev";
CREATE DATABASE "linkedin_dev"
    WITH
    OWNER = "postgres"
    TEMPLATE = template0
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    CONNECTION LIMIT = -1;

\connect "linkedin_dev";

--psql -U postgres -h localhost -a -f src/database/sql/devDat.sql
