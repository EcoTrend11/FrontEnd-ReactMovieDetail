import MoviesGrid from "../components/MoviesGrid"
import Search from "../components/Search"
import { useQuery } from "../hooks/useQuery";

const LandingPage = () =>{
    const query = useQuery();
    const search = query.get("search")// eliminar mi companente para que no se duplique

    return(
        <div>
            <Search/>
            <MoviesGrid key={search} search={search}/>
        </div>
    )
}

export default LandingPage