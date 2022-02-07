import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "./MovieCard.module.css"
const MovieCard = ({e}) => {
    const imageUrl = "https://image.tmdb.org/t/p/w300"+e.poster_path
    return(
        
        
        <li className={styled.movieCard}>
            <Link to={"/movieDetail/"+ e.id}>
                <img 
                    width={230} 
                    height={345}  
                    className={styled.movieImage}
                    src={imageUrl}
                    alt="img not found"/>
                <div>{e.title}</div>
            </Link>
        </li>
        
    )
}

export default MovieCard;