## PosterIt
A print-on-demand e-commerce site for posters.

## Website Structure
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### On every page:
- There is a header with all the relevant links (for logged and non-logged users respectively).
- There is a footer.
- There is a loader for most of the React.Components.

### Homepage:
- All the posts are displayed in rectangular boxes with the relevant image, caption and price tag.
- There is a primitive search engine for the posts by various criterias (name, price, category, etc.)
- For more than 12 posts several pages are rendered.

### Register page:
- There is a registration form with several fields:
    - Full name*
    - Username*
    - Password*
    - Date of birth*
    <!-- - Profile image -->
    - Bio
    - Email*
- On submitting the form the user is redirected to an obligatory stage of creating his/her first poster. Users who do not submit their post are not registered as creators.

### Login page:
- There is a registration form with several fields, all required:
    - Username
    - Password
- On submitting the form the user is redirected to the home page.

### Create Poster:
- There is a form for creating a new poster with several fields, all required:
    - Poster name (caption)
    - Poster price (select option)
    - Poster category (select option)
    - Poster image (upload file)
    - Poster description
- On submitting the form the user is redirected to the home page.

### Edit Poster:
- There is a form for creating a new poster with several fields, all required:
    - Poster name (caption)
    - Poster category (select option)
    - Poster description
- On submitting the form the user is redirected to its details page.

### Delete Poster:
- Are you sure you want to delete this poster permanently?
- On submitting the form the user is redirected to the home page (yes) or to the poster's details page (no).

### Details Page:
- For every poster.

### Profile Page:
- For every creator.
- There is a badges system. Every creator is awarded badges/medals for their activity.

### About Us:
- Documentation of the project.
- Contacts. (field with email - gmail integration)

### Cart Page:
- Products reserved for buying.
- Form with address and etc. - payment simulation.

### Additional Routing Information:
- The cart, details, login, register, home and about pages are public.
- The create, logout and profile pages are private - solely for creators.
- The edit and delete pages are only for the authors of the particular posters.

### Additional Libraries and APIs:
- Gmail API, Google Drive API.