# Realtime-Chat-Application
Realtime Chat Application. Make to ReactJs, NodeJs, SockeIO and MySQL

## Auth Server Installation 

To install the dependencies of each folder run:

```bash
npm install
```
Open the App / config folder and modify the db.config.js file, according to the parameters of your database. Note: this application has only been tested with MySQL.
The database must be created with the name indicated in the configuration file. No need to create tables, the application creates the tables you need.

Run the server. This by default will run on port 8080
```bash
node server.js
```


## Chat Server Installation 
To install the dependencies of each folder run:

```bash
npm install
```

Run the server. This by default will run on port 5000
```bash
node server.js
```

## Client Installation

To install the dependencies of each folder run:

```bash
npm install
```

Run the client. This by default will run on port 8081
```bash
npm start
```

## Usage

As initial screen the application will show a public section. To enter the Chat you must:

1.- Register a User

2.- Login with the newly created credentials

3.- Click on the Chat menu

4.- Indicate the room you want to access. You can indicate any name. It is important to remember this name since with this you can interact with more users and retrieve previous conversations.

5.- Test the Chat


