react-native-app-movies
=================

Movie Library mobile app built with React Native and the OMDb API

Inspired by the amazing [Cinemaniac - Movies To Watch](https://play.google.com/store/apps/details?id=it.papalillo.moviestowatch&hl=en) app.

Medium Article: https://medium.com/@Maluen0/a-clueless-look-at-react-native-part-3-developing-a-movie-library-app-62f111a13321

Installing and running
--------

Make sure to update the [config-private.js](/blob/master/config-private.js) file with your [OMDb API key](http://www.omdbapi.com/):

```
export default {
  "apiKey": "INSERT YOUR OMDb API KEY HERE"
};
```

Then execute

```
yarn
yarn start
```

create-react-native-app
--------

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Screenshots
--------

![Main empty](/screenshots/main-empty.png "Main empty")

![Search](/screenshots/search.png "Search")

![Details](/screenshots/details.png "Details")

![Main Favorites](/screenshots/main-favorites.png "Main Favorites")

![Drawer](/screenshots/drawer.png "Drawer")
