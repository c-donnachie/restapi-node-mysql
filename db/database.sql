CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE pre_cierre (
  id INT NOT NULL AUTO_INCREMENT,
  monto_inicial INT(6) DEFAULT NULL,
  tipo_precierre VARCHAR(20) DEFAULT NULL,
  
  name VARCHAR(45) DEFAULT NULL,
  salary INT(5) DEFAULT NULL,
  PRIMARY KEY (id)
);

INSERT INTO employee VALUES
(1, 'Joe', 1500);



CREATE DATABASE IF NOT EXISTS myapk;

USE myapk;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20),
  price INT,
)

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT
  PRIMARY KEY (id),
  full_name VARCHAR(30),
  last_name VARCHAR(12),
  age INT,
  email VARCHAR(100) UNIQUE NOT NULL,
  pass VARCHAR(255) NOT NULL,
  birth_date DATE NOT NULL,
  gender ENUM('f','m', 'o') NOT NULL,
  sexual_orientation ENUM('heterosexual', 'homosexual', 'bisexual', 'otro'),
  biography VARCHAR(255),
  profile_photo VARCHAR(255),
  creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_conection TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  country VARCHAR(20),
  university VARCHAR(20),
  college_career VARCHAR(30),
  block_u VARCHAR(20),
  verified INT,
);

CREATE TABLE matches (
  id INT NOT NULL AUTO_INCREMENT
  PRIMARY KEY (id),
  id_user_1 INT NOT NULL,
  id_user_2 INT NOT NULL,
  date_match TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  FOREIGN KEY (id_user_1) REFERENCES users (id) ON DELETE CASCADE,
  FOREIGN KEY (id_user_2) REFERENCES users (id) ON DELETE CASCADE,
  UNIQUE (id_user_1, id_user_2)
);

CREATE TABLE user_type(
  id INT NOT NULL AUTO_INCREMENT,
  tipo INT,
  nombre VARCHAR(10),
  PRIMARY KEY (id),
)

CREATE TABLE config(
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT,
  mode VARCHAR(10),
  PRIMARY KEY (id),
)

CREATE TABLE paises(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(12)
  PRIMARY KEY (id),
)

CREATE TABLE events(
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(20),
  precio INT,
  administrador VARCHAR(20),
  PRIMARY KEY (id),
  FOREIGN KEY (nombre) REFERENCES (users) 
)