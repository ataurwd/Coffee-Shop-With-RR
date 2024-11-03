// get all coffees from local storage
const getAllData = () => {
    const all = localStorage.getItem('fav')
   if(all){
    return JSON.parse(all)
   }
   else{
    return []
   }
}

// add to coffee to local storage
const addFavorites = (coffee) => {
    const data = getAllData()
    const ixExist = data.find( data => data.id === coffee.id)
    if(ixExist){
        alert('already added to favorites')
        return
    }
    else{
        data.push(coffee)
        localStorage.setItem('fav', JSON.stringify(data));
    }
}

// remove a coffee from local storage

const removeFavorites = (id) => {
    const data = getAllData()
    const updatedData = data.filter(data => data.id!== id)
    localStorage.setItem('fav', JSON.stringify(updatedData))
}

export {addFavorites, getAllData, removeFavorites}