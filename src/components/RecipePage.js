import { useParams } from "react-router-dom"
export default function RecipePage({recipes}){
    const {slug} = useParams()
    const recipe = recipes.find((rec) => rec?.recipe?.label.replace(/\s/g, "-").toLowerCase() === slug)
    console.log(recipe?.recipe?.totalTime)
    

    return (
        <section>
            <h1>{recipe?.recipe.label}</h1>
            <img src={recipe?.recipe?.image} alt={recipe?.recipe.label} />

            <ul>
<<<<<<< HEAD
                {recipe?.recipe.ingredients.map((ing, index) => (
                    <li key={index}>{ing.text}</li> 
                 ))}
=======
                {recipe?.recipe?.ingredients.map((ing, index) => (
                    <li key={index}>{ing.text} vekt: {ing.weight}</li>
                ))}
>>>>>>> bb0879b543146cadc06b8a8f2dce657834801718
            </ul>
        </section>
    )
}