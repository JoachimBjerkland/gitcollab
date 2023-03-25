import './App.css'
import './recipes.css'
import Main from './components/Main'
import {Route, Routes} from 'react-router-dom'
import RecipePage from './components/RecipePage'
//import recipes from './resources/recipes'
import Layout from './components/Layout'
import { useEffect, useState } from 'react'

function App() {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('chicken')

  const getRecipes = async() =>{
    //Pass på at ID og KEY kommer fra riktig app i edmam, hvis dere har registrert at dere skal bruke recipe api så må app id og key være koblet til det og ikke food databse eller omvendt
<<<<<<< HEAD
    const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=72ba8330&app_key=50692df47057f17e30a159d3e18ecf55`)
=======
    const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=52a150ec&app_key=ced7b20160d07136b580dc435e358b9f`)
>>>>>>> bb0879b543146cadc06b8a8f2dce657834801718
    const data = await response.json()
    console.log(data.hits)
    setRecipes(data.hits)

  
  }
  useEffect(() =>{
    getRecipes()
  },[])


  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Main recipes={recipes} setSearch={setSearch} getRecipes={getRecipes} />} />
          <Route path=':slug' element={<RecipePage recipes={recipes} />}/>
        </Route>
      </Routes>

  );
}

export default App;
