import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import SpinnerLoading from "../components/SpinnerLoading";
import { get } from "../Utils/HttpClient";
import style from "./MovieDetail.module.css";

const MovieDetail = ()=>{ 
    const { movieId }= useParams(); // el movieId se traer del componente MovieCards
    const [isLoading, setIsLoading] = useState(true) // efeto de carga
    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
        setIsLoading(true)
        get("/movie/"+movieId).then(data =>{
            setMovie(data)
        setIsLoading(false)
        })
    },[movieId])

    if(isLoading){
        return<SpinnerLoading/>
    }
    
    const imageUrl = "https://image.tmdb.org/t/p/w500/"+movie.poster_path
    return(
        <div className={style.detailContainer}>
            
            <img 
                className={`${style.col} ${style.movieImage}`}
                src={imageUrl}
                alt ={movie.title}
                />
            <div 
                className={`${style.col} ${style.movieDetail}`}
                >    
                <p className={style.firstTitle}><strong>Title:</strong> {movie.title}</p>
                <p><strong>Year:</strong> {movie.release_date.slice(0, 4)}</p>
                <p><strong>Genero:</strong> {movie.genres.map( genre => genre.name).join(", ")}</p>
                <p><strong>Description:</strong> {movie.overview}</p>
            </div>
        </div>
    )
}
 
export default MovieDetail;
