import { useState } from "react"
import axios from "axios"

function Weather() {
    const [city, setcity] = useState("")
    const [weather,setweather] = useState("")
    const [temp,settemp] = useState("")
    const [desc,setdesc] = useState("")

    function handleCity(evt) {
        setcity(evt.target.value)
    }

    function getWeather() {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=02e57bcdcabb93866c1574e12beff4b4`)

        weatherData.then(function (success) {
            console.log(success.data)
            setweather(success.data.weather[0].main)
            setdesc(success.data.weather[0].description)
            settemp(success.data.main.temp)
        })
    }

    return (
        <div className="bg-sky-300 min-h-screen flex justify-center items-center p-10">
          <div className="bg-sky-800 p-10 text-white rounded-lg shadow-xl transition duration-500 ease-in-out transform hover:scale-105">
            <h1 className="text-3xl font-semibold text-white mb-4 animate-pulse">Weather Report</h1>
            <p className="text-lg mb-4">I can give you a weather report about your city!</p>
            
            <input 
              onChange={handleCity} 
              type="text" 
              className="w-full mt-2 text-black border border-black rounded-md p-2 focus:outline-none focus:ring focus:ring-sky-500 transition duration-300" 
              placeholder="Enter your city name" 
            />
            
            <button 
              onClick={getWeather} 
              className="bg-sky-500 text-white w-full p-2 rounded-md mt-4 hover:bg-sky-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get Report
            </button>
      
            <div className="mt-6 text-white">
              <h1 className="text-xl font-medium"><b>Weather:</b> {weather}</h1>
              <p className="text-lg"><b>Temperature:</b> {temp}</p>
              <p className="text-lg"><b>Description:</b> {desc}</p>
            </div>
          </div>
        </div>
      );
      
}

export default Weather