# Welcome To The ReVOLT Website GitHub

In this repository, you will find two primary folders, the "backend" and "frontend". You will only be permitted to work on the assigned folder. Towards the bottom of the page, there will be an "Updates" section where new information about the repositoy and its operations will be outlined (This helps to keep the history of the repository visible at all times).

## Frontend And Backend

### Backend

The backend consits of:

- data_information
- email_backend
- flask_backend

The "email" and "flask" backend have already been configured to help with credentials and communication services. The data_information folder will require monitoring as the folder is to be frequently updated with data from our projects.

### Frontend

The frontend is desgined with NextJS as the primary framework, with TypeScript as the primary language. The main section that will require monitoring is the (public-access) section as this is where all of the ReVOLT public content is available. Another frame used along side with NextJS is ThreeJS, which is intended for rendering our 3D models of the vehicles onto the website, making them interactable.

## How To Run Locally

### Via Terminals

When testing the program locally, you will be required to open 3 seperate terminals (all can be displayed at once if you want to). The 3 terminals will need to be run and each will need to be activated in the correct directory.

- Two of the terminal will need to used to run the backend, one for the email_backend and one for the flask_back end. In order to run the email_backend, you will need to use the command (#1) and to run the flask_backend, you will need to use the command (#2):

```bash
#1
node server.js

#2
python app.py
```

- The final terminal will need to used to run the frontend. In order to run the frontend, you will want to first run command (#3) to make sure the dependencies are up-to-date, then you will want to run command (#4) to start the program (should be running on localhost:3000 by default):

```bash
#1
node server.js

#2
python app.py
```

By this point, all of the terminals should be up and running and you should be able to access the site locally/in development mode at localhost:3000.

### Via Docker

If you have Docker Desktop installed and configured to be linked with you GitHub account, you have the option to run the whole program in a single terminal (albeit might take a little bit longer to boot up). You first want to make sure you are at the root directory of the project. Once there, you will want to run the command:

```bash
docker compose up --build
#or
docker compose up -d --build #Enables access to the terminal
```

When you are done, run the command:

```bash
docker compose down --rmi all --volumes
```

This ensure that the images are wiped after every run and are rebuilt whenever the program is run locally/in development mode. This process is setup so that all memebrs can easily execute the program locally. There are other docker commands that can be used to check for the status of the program, however this was mainly desgined for internal use.
