
import { useState } from 'react'
import movieData from '../movies-data.json'

function MovieList(){
    // const [stateName, updaterFunction] = useState(initial Value)
    const [movies,setMovies] = useState(movieData)
    // console.log(movies)
    
    function deleteMovie(movieId){
        console.log(movieId)

       const filteredMovies = movies.filter((oneMovie)=>{
        return oneMovie._id !== movieId
       })
       console.log(filteredMovies)
       
       setMovies(filteredMovies)


    }

    function sortMovies(){
        let moviesCopy = [...movies]
        moviesCopy.sort((a,b)=>{
            return a.title.localeCompare(b.title)
        })
        console.log(moviesCopy)
        setMovies(moviesCopy)
        
    }


    return(
        <div>
            <button onClick={sortMovies}>Sort All Movies by title</button>
            {movies.map((oneMovie)=>{
                return(
                    <div key={oneMovie._id}>
                        <h3>{oneMovie.title}</h3>
                        <p>Director: {oneMovie.director}</p>
                        <p>Rating: {oneMovie.IMDBRating}</p>
{/*                         {oneMovie.hasOscars && <p>Has Oscar!!!!</p>}
 */}        
                        {/* ternary statement */}
                        {oneMovie.hasOscars ? <p>Movie has oscars</p> : <p>Movie didnt win an oscar</p>}
                       <button onClick={()=>{deleteMovie(oneMovie._id)}}>Delete Movie</button>
                    </div>
                )
            })}
            
        </div>
        
    )
}


export default MovieList




/* 



Array methods that mutate the original array:



1. push() adds an element to the end of the array

2. pop(): removes an element from the end of the array

3. shift(): removes an element from the beggining of the array

4. unshift() adds an element from the beggining of the array

5. splice() removes an element from anywhere in the array | could also be used to add elements anywhere in the array

6. reverse(): reverses the order of my array

7. sort(): sorts my array




Array methods that DONT mutate the original array:



1. forEach(): iterates through the array and performs a function

2. map(): iterates through the array and performs a function with a return that will create a new array

3. filter(): filters the array down based on a given condition after the return

4. reduce(): reduces all the values in my array into a singular value

5.slice(): gets a slice of my array based on the arguements and returns that in a new array



*/
