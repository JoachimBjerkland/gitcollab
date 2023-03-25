import RecipeCard from './RecipeCard';
//import recipes from '../resources/recipes';
import { Link } from 'react-router-dom';
import Search from './Search';
export default function Main({recipes, setSearch, getRecipes}){
    return (
      <>
<<<<<<< HEAD
      <Search setSearch={setSearch} getRecipes={getRecipes}/>
      <section className='recipe-view'>
        <h2>Oppskrifter</h2>
          {recipes.map((recipe, index) => (
              <Link key={index} to={recipe?.recipe?.label.replace(/\s/g, "-").toLowerCase()}>
                  <RecipeCard title={recipe?.recipe?.label} img={recipe?.recipe?.image} time={recipe?.recipe?.totalTime} /> 
              </Link>
          ))}
          </section>
=======
      <Search setSearch={setSearch} getRecipes={getRecipes} />
      <section className='recipe-view'>
        <h2>Oppskrifter</h2>
          {recipes.map((recipe, index) => (
                  <RecipeCard key={index} title={recipe?.recipe?.label} img={recipe?.recipe?.image} time={recipe?.recipe?.totalTime} slug={recipe?.recipe?.label.replace(/\s/g, "-").toLowerCase()} /> 
             
          ))}
        </section>
>>>>>>> bb0879b543146cadc06b8a8f2dce657834801718
      </>

      );
}