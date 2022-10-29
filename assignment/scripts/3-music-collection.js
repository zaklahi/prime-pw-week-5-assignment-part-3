console.log('***** Music Collection *****')
// Create a variable `collection` that starts as an empty array.

// - Add a function named `addToCollection`. This function should:
// - Take in the album's `title`, `artist`, `yearPublished` as input parameters
// - Create a new object having the above properties
// - Add the new object to the end of the `collection` array
// - Return the newly created object

// - Test the `addToCollection` function:
// - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
// - Console.log each album as added using the returned value.
// - After all are added, console.log the `collection` array.

// - Add a function named `showCollection`. This function should:
// - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
// - Console.log the number of items in the array.
// - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

// - Test the `showCollection` function.

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.


let collection = [
{
    title: 'itsOnlyMe',
    artist: 'Lil Baby',
    yearPublished: 2022
},
{
    title: 'blindedByDeath',
    artist: 'Hotboii',
    yearPublished: 2022
},
{
    title: 'My Turn',
    artist: 'Lil Baby',
    yearPublished: 2020
},
{
    title: '7220',
    artist: 'Lil Durk',
    yearPublished: 2021
},
{
    title: 'Midnights',
    artist: 'Taylor Swift',
    yearPublished: 2022
},
{
    title: 'Take Care',
    artist: 'Drake',
    yearPublished: 2010
},


];
function addToCollection(title, artist, yearPublished) {

}
console.log(collection);

function showCollection(array) {
 for (let i = 0; i < collection.length; i++) {
    console.log(collection.length)
    return collection;
}
};
console.log (showCollection(`${collection.title} by ${collection.artist} published in ${collection.yearPublished}`))

console.log();



function findByArtist(artist) {
    let matchingArtist = []
    for (let i = 0; i < collection.length; i++){
        let album = collection[i]
    if (artist === album.artist) {
console.log(album.title)
matchingArtist.push(album.title)
    }
    
    }
    console.log(matchingArtist)
    return matchingArtist;
}

console.log(findByArtist('Lil Baby'))

console.log(findByArtist('Taylor Swift'))