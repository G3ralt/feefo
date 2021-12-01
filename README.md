1. Describe high level design:
  Web UI; 
  Spring Boot Server;
  Database;
  The Web UI provides users with controls over their own notes. The UI communicates with the Server thorugh a REST API. The state of the notes is kept in the DB.
  The Note service is available for authenticated user only.
 
 2. Web APP UI:
  Seemless navigation with buttons for the required sections.
  The note section gives overview of the last few (may be 3 or 4) notes created/edited and a list with all the rest.
  Pagination is added if the user has more than N number of notes.
  Filter/sort/search section is added.  
  A very visible and outlines button for creating new notes stands on top.
  Each note in the list or overview has Delete and Edit buttons.
  A good option would be an Archived button/fucntionality as well.
  Favourite notes could be an option as well.
  Sharing option could be a good idea as well.
  
 3. Data model:
  Note should include:
    id, Long
    title, String
    subtitle/description, String
    content/text, String
    category, Category
    dateCreated, Date
    lastUpdated, Date 
    isFavourite, Boolean  
    isArchived, Boolean
    createdBy, User
    owner, User
    sharedWith User collection
    
 4. REST API:
  
  Filter for authenticating the user requests.
  
  Note controller with the following methods:
    createNewNote (POST)
    updateNote (PUT)
    archiveNote (PATCH)
    favouriteNote (PATCH)
    shareNoteWith (PATCH)
    deleteNote (DELETE)
    
  Note Service with the required business logic for every event.
  Note Repository for DB connectivity.
  
