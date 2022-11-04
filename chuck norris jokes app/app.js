

const joke = document.getElementById("joke")
const button = document.getElementById("generate")

button.addEventListener("click", function(){
    
    const url = 'https://api.chucknorris.io/jokes/random'
    const getJoke = async url =>{
        try{
            const response = await axios(url)
            let foundJoke = response.data.value
            joke.innerHTML = foundJoke
        }catch(error){
            alert("Joke not found")
            console.log("joke not found")
        }
    }
    getJoke(url)
})