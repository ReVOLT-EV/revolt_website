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

The frontend is desgined with NextJS as the primary framework, with TypeScript as the primary language. The main section that will require monitoring is the (public-access) section as this is where all of the ReVOLT public content is available. Another frame used along side with NextJS is ThreeJS, which is intended for rendering our 3D models of the vehicles onto the website, making them interactable. Further more, while ruing the project LOCALLY, you will want to update the "val" variable in the "layout.tsx" file in the "(member-access)" folder to equal "0" (defualt is ALWAYS set to "1"), as this controls the protected status of the pages.

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
npm update

#2
npm run dev
```

By this point, all of the terminals should be up and running and you should be able to access the site locally/in development mode at localhost:3000.

### Via Docker

If you have Docker Desktop installed and configured to be linked with you GitHub account, you have the option to run the whole program in a single terminal (albeit might take a little bit longer to boot up). You first want to make sure you are at the root directory of the project and have Docker Desktop running in the background. Once there, you will want to run the command:

```bash
docker compose up --build
#or
docker compose up -d --build #Enables access to the terminal
```

When running in detached mode, you can also run the following command if you want to chec the logs for the folders being run (the folder types can be found by checking the docker-compose.yml file):

```bash
docker compose logs (folder-type)
```

When you are done, run the command:

```bash
docker compose down --rmi all --volumes
```

This ensure that the images are wiped after every run and are rebuilt whenever the program is run locally/in development mode. This process is setup so that all memebrs can easily execute the program locally. There are other docker commands that can be used to check for the status of the program, however this was mainly desgined for internal use.

## Working On GitHub

### General Work Procedure

In this GitHub repo, you will find that there are a total of 5 branches present:

- main
- staging

The "main" branch will be responsible for hosting the offical site. This branch will only be worked on when a new update to the site is to be added after proper inspection from the team. The "staging" branch on the other hand is where the team will play around with there code and test the feature to see if they are able to work as intneded. While working with the "staging" branch, uers will be required to create their own branch to work on before merging their contnent onto the "staging" branch. The naming convention for the person branches is shown below.

- (name)-(feature worked on)

These branches can be developed by individual members where once the feauture is complete, the branch can be deleted after merging with the "staging" branch.

### GitHub Commands

While using GitHub, it is best practice to use the git commnds as the built-in VSCode commands will only suffice for simiple commits. Here are som of the following commnds you should become familiar with while working on the repo:

```bash
# 1.
git branch -a

# 2.
git checkout (branch)

# 3.
git pull origin main

# 4.
git pull

# 5.
git stash push -m "(message)"

# 6.
git stash list

# 7.
git stash pop

# 8.
git stash pop stash@(n)
```

1. This command is helpful when needing to check all of the branches that are available in the repository, which includes both local and remote branches. This is best run after the user pulls all of the content from the branch first to recieve all of the latest content.

2. This command is useful when needing to switch bewteen different branches. When running the command, the branches are switched based on the local branches, however this will be mathced with the remote branches.

3. This command is useful when needing to update all of the content of the branch from the content present on main (getting all of the latest content being hosted on the site).

4. This command is used when retrieving the latest content from the current branch a user is on, ensuring that no conflicts occur when updating the files on the repo (should always be run when switching to the branch).

5. This command is useful for when a user is making some chnages to code but under the wrong branch. Running the command will allow the user to stash the changes seperately, allowing them to switch to the proper branch.

6. This command is used when a user needs to check what chnages are stashed should a user have made multiple stashes and is unaware of which changes need to be commited.

7. This command is used along side with command #5, where the user is able to bring back the stashed changes once under the correct branch and commit the changes accordingly.

8. This command is similar to command #7 where the user can commit a specifc stash from the chnages they have made, where the value of (n) is the index value of the stash list, which is run usinging command #6.

## -----------------

```bash
# 1.
git add (file or .)

# 2.
git commit -m "(message)"

# 3.
git push
```

1. This command is used when needing to commit a file onto the repo. This command will select certain files to be added in to the repo

2. This comamnd is simply to set up the message for the commit so other users on the repo are aware of what type of commit is being added onto the branch (this will also set up the need for a pull request).

3. This command will push the commit being made onto the repo, which is then later review when needing to merge the content onto the development branch.

NOTE: The admin will be responsible for merging the content from the development branch onto the main branch.

## ---------------

## Updates

(No new updates)
