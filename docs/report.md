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
written and formatted using HTML and CSS. The application is
currently being developed on a WAMP servers local to
developer machines. Amazon Web Services offer the capability to 
host WAMP applications on remote Windows servers. Though not 
typical for production level applciations, for the team's uses, this 
could be the simplest soultion for global access to the application.

#### User Experience
For a user to use this application they would start off on a home
page and either request to pull up a current timeline, or create
a new timeline.  If continuing to edit a timeline the current
timeline will be loaded for the user and they can then continue to
make edits and view the timeline as they please.  If starting from
scratch, the user will have the same editing interface but with an
empty canvas.  At any point the user can view the timeline and a
new window will be opened in which the user can view the timeline
and see what other viewers will experience. One production goal
is to allow for the exportation and embedding of timelines into
other external web pages.

#### Database Design
As stated earlier, the team used MySQL to maintain the database
for this application.  The information for a timeline will be
stored in a table which will hold the following information, such
as timeline id, owner, and data. The timeline data will be a table of its own containing the
different events making up a timeline. Multiple approaches for data storage and retrieval 
are currently being considered. These include:

  - Creating unique databse tables for individual timelines with timeine data items being stored in table cells
  
  - Storing whole XML or JSON files representing a timeline to a database table mapped to a unique user


### Business Logic
It is much easier to understand what is going to happen, or what
has happened over a specific time period when you are looking at a
timeline.  It would be much harder to understand how the upcoming
conference you are attending will flow if everything is written in
a few large paragraphs.  Our application would allow for a graphic
representation of all the information that needs to be given out
in an easily digestable manner.

This allows planning commitees tohave a tool to create an
itenerary for their events where the most basic information is
readily available.  If a user wants more information then are then
able to either mouse over or click on the event on the timeline
and get more specific information.  

Additionally, news organizations can utilize this tool to present
easily-digested representations of large, multi-year events
such as global conflicts or court cases while maintaining the
ability for the user to explore the detail of the event as they
please.

This application will help
timeline viewers quickly understand the most important items from
a large event while giving them the ability to discover more details
in an engaging and intuitive matter.

### Application Features
*Should this be a list of basically all the functions that are
going to need to be written?*

This application is still in the planning phase, therefore, no
lines have code have not yet been written.

### Account Creation & Login

#### Creating a Timeline
*0%*
Editors will be able to create a new timeline for their event
which will bring up the timeline editor. User will initially be
asked for a timeline title.

#### Editing a Timeline
*0%*
Editors will have options for adding new items, editing existing
items, or removing items.  When adding an item the editor will get
to enter a title and time period.  Then, the editor will be able
to add additional information or content (text, links to other pages, media etc.)

##### Example item:

    Time: "11/13/17"
  
    Title: "ISP Term Project Started"
  
    Description: "Tim and Orion began work on their ISP term project"
  
    Additional expandable info:
  
    item 1: Link to github page
    
    item 2: Image of work-in-progress
    
    item 3: Video of prototype demo

Production goal: Allow users to use prexisting timeline themes or create
their own unique themes.

#### Saving a Timeline
*0%*
When an editor wants to save their timeline to come back and
finish editing later they can save their work.  This will store
the timeline's current information in the database so it can be
retrieved when they are ready to continue working on it.

##### Implementations

  - Store timeline as XML or JSON
  
  - Decompose timeline data items into individual database cells
 

#### Exporting a Timeline
*This section is yet to be determined*
