Online version: https://rciesielski3.github.io/react_DisneyApi

Task content:
The aim of the homework is to create a simple application that will download data from the API and display it in the form of tiles on the website. Clicking on the tile in the appropriate place will open a modal with more information about a given character. The website will have pagination and a change of theme from light to dark.

Guidelines:

1. We use styled-components to style the application
2. I suggest you familiarize yourself with the material-ui library, it is not a mandatory element, but it can speed up development work.
3. Theming can be solved in one of two ways:
4. Through a self-created context and an object storing CSS values.

The method is described in the styled-components documentation.

Home

1. Place the switch to change the theme in the upper right corner of the application.
2. Displayed cards should be responsive and fill the available space.
3. The card contains a photo of the character, name and a button that will open the modal.
4. Pagination is placed at the bottom of the page.
5. The elements should be made aesthetically.

Downloading and displaying data.

1. We download data from the public API https://disneyapi.dev/docs
2. All business logic should be placed in custom hooks.
3. We take care of error handling when downloading data.
4. While we are waiting for the data, we display the appropriate loader.

Pagination

1. Pagination should display the true number of available pages.
2. Pagination should be done in an aesthetic way.
3. The page we are on should be marked on the pagination.

Modal

1. We create the modal using react portal
2. After opening the modal, we download the data of a given character based on the id.
3. The modal displays more information about a given character, such as: films, shortFilms, videoGames, tvShows. It is worth noting that individual characters will differ significantly in the amount of information they have.
4. We only display the information that a given character has.
5. The photo of the character on the modal should be round.
6. Close the modal using the button or by clicking outside it.
7. Modal also involves changing the theme
