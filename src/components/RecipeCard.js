<<<<<<< HEAD
export default function RecipeCard({title, img, time}){
=======
import { Link } from "react-router-dom";

export default function RecipeCard({title, img, time, slug}){
>>>>>>> bb0879b543146cadc06b8a8f2dce657834801718
    return(
        <article className="recipe-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
<<<<<<< HEAD
            <span>{time}</span>
=======
            <p>Estimert tid: <span>{time}</span></p>
            <Link to={slug} className="link"></Link>
>>>>>>> bb0879b543146cadc06b8a8f2dce657834801718
        </article>
    )
}