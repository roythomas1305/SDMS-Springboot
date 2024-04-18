
# Student Database Management System

Student Database Management System (SDMS) created using Spring Boot and React.

It was created as the Final project for the Java Full Stack Development Course at KGiSL Micro College.

## Tech Stack

**Client:** React, Bootstrap

**Server:** Java, Spring Boot

**Database:** MySQL


## Installation

For Frontend

```bash
  cd frontend
  npm install
  npm init
  npm start
```

For Backend

```bash
  cd backend
  node index.js
```

This should be fine but in case not working

Here are dependencies used in Frontend

```bash
  npm i react-router-dom
  npm i axios
  npm install react-bootstrap bootstrap
  npm i --save @fortawesome/fontawesome-svg-core
  npm install --save @fortawesome/free-solid-svg-icons
  npm install --save @fortawesome/react-fontawesome
  npm i @fortawesome/free-brands-svg-icons
```

Here are dependencies used in Backend

```bash
  npm i express
  npm i axios
  npm i mysql2
  npm i express-session
  npm i express-mysql-session
  npm i cors
  npm i body-parser
  npm i cookie-parser
  npm i crypto
```
## Demo Video

[Click Here To View Video](https://drive.google.com/file/d/1OoQpMdMqD6u9e4QKirfF0cwI54FgJrVs/view?usp=sharing)


## Screenshots

![React App - Personal - Microsoft​ Edge 18-04-2024 12_18_15 AM](https://github.com/roythomas1305/SDMS-Springboot/assets/151865034/048ad500-075f-40d5-bb4d-6d2de77dee15)
![React App - Personal - Microsoft​ Edge 18-04-2024 12_18_25 AM](https://github.com/roythomas1305/SDMS-Springboot/assets/151865034/d790c6e0-7316-4154-86f2-a3a94109e7c1)
![React App - Personal - Microsoft​ Edge 18-04-2024 12_18_54 AM](https://github.com/roythomas1305/SDMS-Springboot/assets/151865034/7dc53b92-5b08-4651-991e-9f83eb6eb39f)
![React App - Personal - Microsoft​ Edge 18-04-2024 12_19_38 AM](https://github.com/roythomas1305/SDMS-Springboot/assets/151865034/0c4a053e-a93c-40a0-b252-a00fd9abc6fb)

## Features

- There are 3 login roles - Admin, Campaigner, Backer
- For Register there are only 2 roles - Campaigner & Backer
- An Admin can only be added by another admin only
- Because Admin has complete access to datbase
- Admin can perform CRUD Operations on both User data aand Campaign data
- Campaigner can also perform CRUD Operations, but on Campaigns only
- Also a Campaigner can only do this on the Campaigns that was xreated by the specific Campaigner
- Bakers can only view and donate to Campaigns


## Thank You

Happy Coding!!!
