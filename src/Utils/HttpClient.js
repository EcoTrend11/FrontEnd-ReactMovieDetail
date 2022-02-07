const API = "https://api.themoviedb.org/3";

export function get(path) {
    return    fetch(API + path, { 
        headers : {
            Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWVhOWNmNjI2MjgzNGQ5OGQ0ODc2MWU2ODZlNTUxZiIsInN1YiI6IjYxZWYwYzAwNDJiZjAxMDBiZmM5MDhiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YfXUX7dgoHx0u7rPePicZrwRNfKe9UCxB_6I5_Lh8SQ",
            "Content-Type" : "application/json;charset=utf-8"
        },
    })
    .then(result => result.json())
    
}