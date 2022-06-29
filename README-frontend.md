## COLLABORM8
A platform that allows bootcampers to collaborate on side-projects. 

### Getting Started
1. The Front-End is built using React & CSS.
2. In the Front-End terminal, use `npm i` to make sure all packages are installed. 
3. Use `npm start` to spin up the project



## USING THE APP
### User journey
A user of the App might work through the below components:
- `Dropdown` - This is the first component our users will interact with on our landing page. Users can input their project requirements. 
- `Suggestions` - This is the second component our users will interact with following the results from the options they selected from the Dropdown. This is where profiles of matched users will appear, and users can opt to collaborate with them.
- `Input` - This third component allows users to add their suggestions to the existing projects on the database, comprising of: name, email , project type, project interest, availability & strength.

### App.js & GetSuggestions index.js
- These files import components & use states to monitor user input, so it’s worth becoming familiar with both. 
- In `App.js`, the `GetSuggestions` and `MoreSuggestions` components are imported - though their main functionality is determined in the `GetSuggestions index.js`.
- The `GetSuggestions` component returns the two sections used to match users: the Dropdown fields, and the matched user profiles.
- The user input for each Dropdown field is tracked in separate variables in order to match users precisely. These fields also have their own individual components. 
- Profiles for matched users are returned once the button is clicked and the function has run. Otherwise, by default, no users will be displayed.

### GetSuggestions: Dropdown
- Four inputs: `Project Interest`, `Project Type`, `Strength` & `Availability`.
- Primarily matched on two criteria: `Project Type` and `Availability`. 
- From `lines 21-44`, our database is queried based on the user input and returns any relevant matches. 

### GetSuggestions: Matched Suggestions
- This div is configured so that up to three matched user profiles are returned. (NB fewer than three profiles could be returned, depending on what results are found in the database.) 
- These matches will be displayed using the ProfileCard component; which in turn displays matched users’ details, drawn from the existing database.
- Users will then have the option to click to reveal further suggestions - but these returned profiles will be randomised, rather than matched.

### New Project Suggestions
- Currently, this takes in the key information for a user's new project idea - plus their email address.
- When the user then clicks the submit button, their input is added to our database using a POST request.
- Once the user has clicked the button to submit their input, they will get acknowledgement in the form of text printed on-screen (h2).

### Styling
- Rather than having multiple CSS files, all our styling is centralised in `app.css`.
- We have selected Root colours to ensure our house styling is cohesive.

## Notes for future development
We have the following areas to look into for further iterations:
- We would introduce additional navigation tools for users - e.g. a top navbar or hamburger icon.
- In order to establish our key functionality, we hardcoded our dropdown options. Eventually, however, our intention is to develop a more responsive method which takes data solely from user input. 
- Furthermore, we would aspire to introduce another level of functionality to our submit buttons, so that user input would be cleared/resetted once it has been submitted.




