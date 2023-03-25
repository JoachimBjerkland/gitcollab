import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
<<<<<<< HEAD
=======

>>>>>>> bb0879b543146cadc06b8a8f2dce657834801718
export default function Search({setSearch, getRecipes}){

    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    const handleSearch = (event) =>{
        setSearch(event.target.value)
        console.log(event.target.value)
<<<<<<< HEAD
    }



    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Pannekaker.." onChange={handleSearch}/>
            <button type="submit" onClick={getRecipes}><MagnifyingGlassIcon/>Søk</button>

=======

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Pannekaker.." onChange={handleSearch} />
            <button type="submit" onClick={getRecipes}><MagnifyingGlassIcon/></button>
>>>>>>> bb0879b543146cadc06b8a8f2dce657834801718
        </form>
    )
}