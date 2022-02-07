import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useQuery } from '../hooks/useQuery';

import style from "./Search.module.css"

const Search = () =>{
    const query = useQuery()
    const search = query.get("search")
    console.log(search)
    
    const [searchText, setSearchText] = useState("")
    
    const history = useHistory()
     const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/?search=" + searchText);// añade lo del input a mi ruta
    }

    useEffect(() => {
        setSearchText(search || "") // si es nulo va a comillas vacias
    }, [search])

    return(
        <form className={style.searchContainer} onSubmit={handleSubmit}>
            <div className={style.searchBox}>
                <input 
                    className={style.searchInput}
                    type="text"  
                    value={searchText} 
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className={style.searchButton} type="submit">
                    <FaSearch 
                    size={20}/>
                </button>
            </div>
        </form>
    )
}

export default Search