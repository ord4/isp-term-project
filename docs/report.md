# MyLine - An Interactive Timeline Editor
Internet Systems Programming term project by Orion Davis and Tim Synder

### Introduction
MyLine is an interactive editor that allows uers to edit and view their own custom made timelines.  This application can be used to detail event itineraries, historical events, or other times where a timeline makes communication simple.  The application can be found on Pausch at the link <a href="http://pausch.cs.uakron.edu/~ord4/prj/login.php">http://pausch.cs.uakron.edu/~ord4/prj/login.php</a>.

### Implementation
To implement MyLine the back end server logic was written using PHP and MySQL Database.  The database lives on The University of Akron's servers for students and requires a university connection to properly connect to the database (it should also be noted that a university connection is also needed to use the application on Pausch).  For the front end HTML was used to display the data and was then styled using CSS.  Within the front end is the editor and to handle the operations of the editor JavaScript was used.

The database is a table which contains the user's account information.  This information includes an id number, username, hashed password and timeline data.  The timeline data is stored in JSON format which can easily by processed by the application to render the timeline for the user's viewing.  When buttons are pressed by the users requests are sent to the server for processing.  In the case of registion and logging in the primary function is to interact with the database and either add a new entry or query the database and look for the user.  

The front end uses HTML and CSS to provide the interface to the user.  Most of the editor's functions are handled local to the client through JavaScript, but when the user is ready to save their timeline the information gets sent to the database.  *TODO: Add more to this section*

### Screenshots
Below are a series of screenshots of the application's different pages and interfaces.

<label for="login_img">Login page, first page you encounter</label>
<img id="login_img" src="./images/login.png" style="display:block;margin:auto;">
<hr>

<label for="viewer_img">Example viewer output</label>
<img id="viewer_img" src="./images/viewer.png" style="display:block;margin:auto;">
<hr>

<label for="editor_img">Timeline editor</label>
<img id="editor_img" src="./images/editor.png" style="display:block;margin:auto;">

### Contributions
For the application Tim headed up the design of the editor and how to represent all of its information.  He worked on the user interface and making sure it was simple to use and the user could create new events and move them around as need be.  Tim also designed how the data would be kept so that it could be saved in the database and then retrieved and read when the user logs in to continue editing the timeline.  Tim's work with the editor also included developing a viewer of the user's timeline which they could then screenshot and save an image of.

The login and registration forms were designed by Orion.  He created the interface for the forms and connected them with the database, which he also headed.  Once a new user had registered they were able to login and be routed to the editor to begin editing their timeline.  

### Experience Gained
Throughout this project the team learned how to create a full scale web application.  The team learned how to design a database to store different information needed for all of the users and making sure their data is safe.  This project tought the team a few of the basics to storing passwords safely through the process of password hashing.  The team also learned about creating dynamic webpages as is evident in the dynamic editable nature of the timeline editor.  And finally when getting ready to deliver the project the team learned a few things about deploying an application that uses a database and server that must be accessable to other users and not just local to the machine.

### Future Work
To expand this project in the future the team could look to allow users to have more than one timeline in which they can edit and view at the same time rather than just one at a time.  Another possible expansion of the project could be a homepage where the user can view all their timeline and also be able to browse other timelines that users have created an made public.  Finally, and perhaps one of the most important next steps would be to create a version of the timeline that is easily exportable and can be embedded into user's own webpages or other media.