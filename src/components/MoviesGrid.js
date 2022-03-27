import { useEffect, useState } from "react"
import { get } from "../Utils/HttpClient";
import MovieCard from "./MovieCard"
import styled from "./MoviesGrid.module.css"
import SpinnerLoading from "./SpinnerLoading";
import InfiniteScroll from 'react-infinite-scroll-component';



const MoviesGrid = ({search}) => {
    const [ movies, setMovies ] = useState([]);
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    
    
   
    useEffect(() =>{

        const searchUlr = search 
            ? "/search/movie?query=" + search + "&page=" + page
            : "/discover/movie?page=" + page; 
        get(searchUlr)
        .then(data =>{
            setMovies((prevState) => prevState.concat(data.results));
            setHasMore(data.page < data.total_pages)        
        })
    },[search, page])

                 // setPage se puede ejecutar como funcion donde el parametro es el estado anterior 

    return(
        <InfiniteScroll 
            dataLength={movies.length} 
            hasMore={hasMore} 
            next={()=> setPage((prevState) => prevState + 1)} loader={<SpinnerLoading/>} > 
                <ul className={styled.moviesGrid}>
                    {movies.map(e=>(<MovieCard key={e.id} e={e}/>))}
                </ul>
        </InfiniteScroll>
    )
}

export default MoviesGrid