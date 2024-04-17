
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

[Click Here To View Video](https://drive.google.com/file/d/1BswqfQROjGM8UeDvJD9tSh-5Uz29c9BF/view?usp=sharing)

Note :- Apologies in advance for the minor background noises within the video, also sometimes the dropdown options are not visible in the video due to problem with screen recording software, but the functionality is still there.

Thanks! for understanding.


## Screenshots

![Exodus Crowdfunding Inc  - Personal - Microsoft​ Edge 06-03-2024 01_18_33 PM](https://github.com/roythomas1305/Exodus-Crowdfunding-Inc/assets/151865034/5dbf910c-21e1-4469-8141-027fad007a82)
![Exodus Crowdfunding Inc  - Personal - Microsoft​ Edge 06-03-2024 01_19_20 PM](https://github.com/roythomas1305/Exodus-Crowdfunding-Inc/assets/151865034/2b45b0c1-263d-4681-8b00-4bffa6bb85bb)
![Exodus Crowdfunding Inc  - Personal - Microsoft​ Edge 06-03-2024 01_19_29 PM](https://github.com/roythomas1305/Exodus-Crowdfunding-Inc/assets/151865034/7ec9d0dd-cab0-411b-b596-182b783bf6f1)
![Exodus Crowdfunding Inc  - Personal - Microsoft​ Edge 06-03-2024 01_19_42 PM](https://github.com/roythomas1305/Exodus-Crowdfunding-Inc/assets/151865034/44a09bc1-aabc-44dd-94d4-a1437d5e155a)


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
