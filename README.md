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

# 3. The Angular Architecture
## Components:
- Account: Will handle the user registration.
- Login: Will handle the user login part.
- Profile: Allow users to view and update their profile.
- Group: Handles the creation and deletion of groups.
- Channel: Manages channels within groups.
- Dashboard: Displays an overview of the chat system.

## Services
  - AuthService: This manages auth, handles login/logout, and also stores auth. tokens.
  - UserService: Manages user data, such as retrieving the logged in user's profile and managing groups.
 
## Routes
- Login: '/login'.
- Dashboard: '/dashboard'
- Group-Management: '/channel-management'
- Profile: '/profile

# The Node.js Server Architecture
## Modules
- Express: This will mainly stand for setting up the server and handle the routes
- Body Parser: Middleware to parse incoming JSON requests.
- Path: Used to resolve file paths to serve static Angular files.

## Files
- server.js: The entry point for the server, handles API requests, serves Angular files, and manages different routes.

## Global variables
- "Users": This is for storing user data.
- "Groups: This is used for storing group data and their associated channels.

## Functions
- findUser(): Locates a user by the username and password
- getUsers(): Returns all users.
- createGroup(): Adds a new group
- deleteGroup(): Delete a group by ID

# 5. Server Side Routes
## POST /login: Auth. a user
- parameter: "{ username: string, password: string }"
- returns: "200 OK" with the details on sucess, and "401 Unauthorized" on failure.
## GET /api/users: Retrieves all the users
- Returns: Array of users.
## POST /api/groups: Creates a new group
- Parameters: "{ name: string }
- Returns: "200 OK" with group details on success.
## DELETE /api/groups: Deletes the group by ID
- Parameters: Group ID in the URL.
- Returns: "200 OK" on success, or "404 Not fOund" if the group doesn't exist.

# 6. Client-Server Interaction
## Login
1. Client will send a POST request to "/login" with the users username and password
2. Then it will check if the user exists. If it does, then it will return the users profile data, otherwise, it returns an error.
3. The client stores the user data in local storage and redirects to the dashboard.

## Profile Updated Interaction
1. The user updates their profile via the "ProfileComponent"
2. The client sends the updated profile data to the /updatePrfile" API on the server
3. This will then update the user data and return the sucess message.
4. ProfileComponent reflects the upload profile details in the UI.

## Group/Channel Management Interaction:
1. The user creates or deletes group/channels from the "GroupManagementComponent" or "ChannelManagementComponent"
2. Requests are sent to the server to update the group/channel data
3. The server processes the request and sends back updated data, which is the reflected in the UI.
  


# A little reminder

## Since you have a simple user structure in users.js, you can connect it with your Express server to handle login requests by calling findUser() and managing authentication flow via session or JWT token in Phase 2.**

## Account Component: Can manage user information, including logout and deleting the account.
## Channel Management: Group Admin can create/delete channels.
## Group Management: Group Admin can create/delete groups and manage users.
## Dashboard: Can show logged-in user information.
## Profile: Users can update their profile details.
## Login: Handles login and session management.
