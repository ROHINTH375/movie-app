import { useParams } from "react-router-dom"
import MovieDetail from "../Component/MovieDetail"




function Moviepage () {
    const {id} = useParams();

    return(
        <div className="movie-page">
            <MovieDetail id = {id} />  
        </div>
    )
}

export default Moviepage