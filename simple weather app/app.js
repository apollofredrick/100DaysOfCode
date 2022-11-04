
const button = document.getElementById("search-btn")
const name = document.getElementById("name")
const temprature = document.getElementById("temp")
const description = document.getElementById("desc")

button.addEventListener('click', function(){
    const input = document.querySelector(".input").value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input} &appid=a410bc2bd70a0f5d983f46cae2207b70`
    const getCity = async url =>{
        try{
            const response = await axios(url)
            console.log("response", response.data)

            let nameValue = response.data['name']
            let temp = Math.floor((response.data['main']['temp'] - 273 ))
            let desc = response.data['weather'][0]['description']

            name.innerHTML = nameValue
            temprature.innerHTML = temp + " Degrees"
            description.innerHTML = desc

        }catch(error){
            alert("No city found")
        }
    }
    
    getCity(url)
    
})





