# CMS Blog
This challenge for Module 14 of the Coding Bootcamp is to create a CMS-style blog.

https://quiet-earth-61890.herokuapp.com/ | https://git.heroku.com/quiet-earth-61890.git

* [User Story](#userStory)

* [Requirements](#requirements)

* [Additional Functionality](#additionalFunctionality)

* [Technologies Used](#techUsed)

* [What I Learned](#whatILearned)

* [CMS Blog Screenshot](#webImage)

* [CMS Blog URL](#projectURL)

* [Contact Me](#contactMe)


---

<a id="userStory"></a>
## User Story

AS A developer who writes about tech

I WANT a CMS-style blog site

SO THAT I can publish articles, blog posts, and my thoughts and opinions

--- 

<a id="requirements"></a>
## Requirements
* On the user's first visit to the site, they are presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in.
* When the user clicks on the homepage option, they are taken to the homepage.
* When the user clicks the dashboard or log in option, they are prompted to sign up or log in.
* When the user chooses to sign up, they are prompted to create a username and password, which are saved and they are logged into the site.
* When the user revisits the site at a later time and chooses to sign in, they are prompted to enter their username and password.
* When the user is signed in to the site, they see navigation links for the homepage, dashboard, and the option to log out
* When the user clicks the homeepage option in the navigation, they are taken to the homepage and presented with existing blog posts that include the post title and the date created
* When the user clicks on an existing blog post, they are presented with the post title, contents, post creator’s username, and date created for that post. The user has the option to leave a comment
* When the user enters a comment and click on the submit button while signed in, the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
* When the user clicks on the dashboard option in the navigation, they are taken to the dashboard and presented with any blog posts they have already created and the option to add a new blog post
* When the user clicks on the button to add a new blog post, they are prompted to enter both a title and contents for their blog post
* When the user clicks on the button to save the new blog post, the title and contents of their post are saved. The user is then taken back to an updated dashboard that includes the new blog post
* When the user clicks on one of their existing posts in the dashboard, they are able to delete or update their post. After updating or deleting, they are taken back to an updated dashboard.
* When the user clicks on the logout option in the navigation, then they are signed out of the site.
* When the user is idle on the site for more than 5 minutes, they are able to able to view comments and posts, but are prompted to log in again before adding, updating, or deleting comments or posts.
* The project must use the following technology:
    * express-handlebars
    * MySQL2
    * Sequelize
    * Express.js API for Controllers
    * dotenv for environment variables
    * bcrypt to hash passwords
    * express-session and connect-session-sequelize to add authentication
* The project's folder structure must follow the Model-View-Controller paradigm
* The application must be deployed to Heroku.

---

<a id="additionalFunctionality"></a>
## Additioal Functionality

* I added the user's name to the title bar if they are logged in.
* The dashboard, log in, and log out buttons each appear as appropriate. That is, if a user is logged in, they will see the dashboard and log out buttons. If a user is not logged in, they will only see the log in button.
* On the homepage, if the user is logged in any posts that the user created are displayed with a different color title bar that matches the  user's name in the title bar.
* The requirements do not indicate a way to see all the comments left on a given post. The requirements state that when a user clicks on a post on the homepage, they are taken to a page where they can leave a comment (if they are logged in). I've changed that comment page to show all comments, and to allow the user to leave a comment if they are logged in.
* While on the comments page, any comments left by the logged in user are displayed in the color that matches the user's name in the title bar.
* I added a "confirm password" field to the signup form.
* The dashboard includes all comments left by a user. Clicking on a comment in the dashboard takes the user to the corresponding post where they can see all the comments as well as add another comment.

---

<a id="techUsed"></a>
## Technologies Used

* express-handlebars
* MySQL2
* Sequelize
* Express.js API for Controllers
* dotenv for environment variables
* bcrypt to hash passwords
* express-session and connect-session-sequelize to add authentication
* heroku
* MVC paradigm

--- 

<a id="whatILearned"></a>
## I learned how to

* Write middleware functions for Express.js.
* Use middleware to restrict access to certain routes.
* Organize a codebase following the MVC paradigm.
* Create templates with Handlebars.js to reduce the amount of front-end JavaScript needed, including partials.
* Implement built-in and custom helpers in Handlebars.js to help with formatting.
* Store and use data saved on a back-end session.

---

<a id="webImage"></a>
## ProjectName Screenshot

![ProjectName](./media/project-name.png)

---

<a id="projectURL"></a>
## ProjectName URL
[ProjectName URL](https://bjackels5.github.io/ProjectName/)

---

<a id="contactMe"></a>
## Contact Me
You can reach me, Brenda Jackels, at bjackels5@gmail.com.