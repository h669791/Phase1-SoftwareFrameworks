# Phase1-SoftwareFrameworks

# 1. Git Repository Organization and Usage
- I wanted to structure this repository so I could have a clear view between the frontent (the angular side) and backends(Node.js + express for phase 1) components.
- Featured branches like configPhase1 was created to work on specific parts of the components, and will be added to the main when I have astable and error free code I'm confident to merge to main.

## Update Frequency
- Could have done a better job at updating the project more frequently. I started on the project and was doing a good job in the "fase1" folder/directory but everything started to fail and some issues appeard. I had to start all over again with a new folder/directory "phase1Assignment". I tried to copy and paste a lot of the stuff I did from the old work. I happened to focus on not doing the same mistake and tweak with the components so much that I kinda forgot to update the project. This is something that should be done regularly to ensure an up to date code and have some form of backup code like if something happenes to the file or the whole code.

## Backend and frontend
As requested in the assignment, I've made a frontend(angular) and a backend(node and express) side.

# 2. The Data Structures Used
## Client-side w/angular
- I made a user.js file thinking it would be more clear for me to work with a seperate file where I could dedicate it to only user data and link it to my server.js file. This will help with scalability and promote good code practice.
- I made a group.js file so it would be easier and clearer for me to work with.
- I also made one for channel.js so it could be easier to read and work with when there's so much data to work with. This will later come in handy when we involve MongoDB in to code.

## Server-side(node
- This is where I store and add user data in arrays for the mean time in phase 1.
- Group and Channel are also stored in arrays. Channels belongs to groups, and users belong to both groups and channels. This will also include some data I can work with during the phase 1.

## Account Component: Can manage user information, including logout and deleting the account.
## Channel Management: Group Admin can create/delete channels.
## Group Management: Group Admin can create/delete groups and manage users.
## Dashboard: Can show logged-in user information.
## Profile: Users can update their profile details.
## Login: Handles login and session management.
