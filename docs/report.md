*This is a work in progress document*
# Interactive Timeline Creator
*TODO: Create header with necessary project information*
This is a project by: Orion Davis and Tim Synder

### Introduction
This project is a web application that will allow users to create
interactive timelines for events.  These events could be
historical events, trip iteneraries, or even conference schedules,
it is up to the timeline editor in how they want to use this
application.  This document will outline the overall application
architecture, business logic, database design, and individual
features of the application along with who developed them.  

### Application Architecture
#### Technology 
To implement this web application the team used a variety of web
programming languages.  With this application requiring data to be
stored for different users it was decided there would need to be a
database and server side programming.  To communicate with the
server PHP was the language chosen.  Specific details of the
database design will be outlined later in the document, but the
database platform chosen was MySQL.  All the webpages seen were
written and formatted using HTML and CSS.

#### User Experience
For a user to use this application they would start off on a home
page and either request to pull up a current timeline, or create
a new timeline.  If continuing to edit a timeline the current
timeline will be loaded for the user and they can then continue to
make edits and view the timeline as they please.  If starting from
scratch, the user will have the same editing interface but with an
empty canvas.  At any point the user can view the timeline and a
new window will be opened in which the user can view the timeline
and see what other viewers will experience.  *TODO: Is there going
to be a way for the timeline to be exported/embedded into other
webpages?*

#### Database Design
As stated earlier, the team used MySQL to maintain the database
for this application.  The information for a timeline will be
stored in a table which will hold the following information, such
as timeline id, owner, and data. The timeline data will be a table of its own containing the
different events making up a timeline. *TODO: Go into more
specifics of how the timeline data table will look (is this even
the correct way to handle 'nested' info)?*


### Business Logic
