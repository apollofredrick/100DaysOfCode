const url = 'https://api.chucknorris.io/jokes/random'

const getJoke = async url =>{
    try{
        const response = await axios(url)
        console.log(response.data.value)
    }catch(err){
        alert("Error")
    }
}
getJoke(url)