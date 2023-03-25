// use local storage to manage cart data


const addToDb = (id) =>{

    const quantity = localStorage.getItem(id);

    if(quantity){
        console.log('already exist')

        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity)
    }
    else{
        localStorage.setItem(id, 11)
    }


}

export default addToDb;