
const movies = [
    { title: "Pushpa", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "Punjabi", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseYear: 2014 }
];

const addMovie = (collection, movie) => {
    collection.push(movie);
};
// here push will input the element in collection array.
addMovie(movies,
    { title: "Tenet", genre: "Sci-Fi", rating: 7.5, releaseYear: 2020 });

// console.log(movies);


const listMoviesByGenre = (collection, genre) => {
    return collection.filter(movie => movie.genre === genre);
};
//here the filter method will filter the movies with genre we have provided in arguement

// console.log(listMoviesByGenre(movies, "Sci-Fi"));

const findHighestRatedMovie = collection => {
    return collection.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};
//here the value of highest will be the first element of array and it will compare to the rest element of movie.

// console.log(findHighestRatedMovie(movies));

const getMovieTitles = collection => {
    return collection.map(movie => movie.title);
};
//here we are using to make array of movies in order of their title.

// console.log(getMovieTitles(movies));

const movieAfterYear =(collection,year)=>{
    return collection.filter(movie => movie.releaseYear>year)
}
//here we are simply doing comparison of given year and the movie year.
// console.log(movieAfterYear(movies,2011));

movies.forEach(movie => {
    console.log(`${movie.title}(${movie.releaseYear}) is a ${movie.genre} movie with a rating of ${movie.rating}.`)
})

//here it will display the all movies one by one with the define sentance.
//to define sentances we are using template literals.
