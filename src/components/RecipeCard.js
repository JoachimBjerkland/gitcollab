export default function RecipeCard({title, img, time}){
    return(
        <article className="recipe-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <span>{time}</span>
        </article>
    )
}