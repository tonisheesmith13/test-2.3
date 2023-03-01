# FLW2 02.3 Code It Solo

MusicPedia is an app where people can find information about different famous musicians. This information is stored in the object titled `artistData` at the top of the `App.js` file.

Let's use what we learned about React to complete the app.

When it's done, it should look like [this](https://imgur.com/vnh32uM).

1. First, let's make sure our ArtistCard component is linked correctly. Use import/export in the appropriate places to make this happen.

2. In ArtistCard.js, our component is looking a little sad - all we have is an empty div. Nest an `h2` tag to hold the name of the artist. Check that you use the prop name correctly.

3. We have some the name of our artist, but we have more data to use! In App.js, add an image prop and a famousSongs prop to the ArtistCard instance.

4. In ArtistCard.js, nest an `img` tag and assign the src to the appropriate prop name. Include an `alt` property in the tag and equal it to the string "artist".

5. Continue by adding a `p` tag to display the famous songs.

This looks better, but we still have more artists to display!

6. In App.js, add 2 more instances of the ArtistCard component (there should be 3 total).

7. Be sure to display the data of the next artist (hint: array indexes)

Success! All three artist cards should be displaying now :)

**Finish early?**:

- Try to combine your knowledge of React AND the `map()` method to complete [this exercise](https://replit.com/@maxwilliams361/023-Extension-Exercise#README.md)
