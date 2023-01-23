// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArray = (moviesArray.map(function(movie){
            return movie.director;
        }));
    return directorsArray;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenMovies = moviesArray.filter(function(movie){
        return movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')
    });

     return stevenMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){return 0;}
    else{
        let suma = moviesArray.reduce(function(total,next) {
        if(!next.score)return total; 
        else return  total + next.score},0);
        
        let average = suma/moviesArray.length; 
        return (Math.round(average*100))/100; }}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramasArray = [];
    dramasArray = moviesArray.filter(function(movie){
        return movie.genre.includes('Drama')
    });
    if (dramasArray.length === 0) {return 0;}
    else{return (Math.round(dramasArray.reduce((total,next) =>total + next.score,0)/ dramasArray.length*100))/100; }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesByYear = Array.from(moviesArray);
    moviesByYear.sort((a, b) =>{
        if(a.year == b.year){
            moviesByYear.sort((c, d) =>{
                return c.year - d.year
            })
        }
        else{
            return a.year - b.year
        }

    });
    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
