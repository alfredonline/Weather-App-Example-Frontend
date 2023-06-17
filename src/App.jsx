import { useState, useEffect } from 'react'
import './App.css'
import { getWeather} from "./ApiCalls"
import Search from './Components/Search'
import DailyCard from './Components/DailyCard'

function App() {

  const [city, setCity] = useState("London")
  const [weatherInfo, setWeatherInfo] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const getWeatherInformation = async () => {
    try {
      setLoading(true)
      const data = await getWeather(city)
      console.log(data)
      setWeatherInfo(data)
      setError(null)
    } catch (error) {
      setError(error.message)
      setWeatherInfo(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getWeatherInformation()
  }, [city])


  return (
    
      <div className='home' style={{
        backgroundImage: `url(${`https://source.unsplash.com/1920x1080/?${city}`})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '100vh',
        width: '100vw',
      }}>
        <div>
          <Search 
            updateCity={(value) => setCity(value)}
          />
        </div>
        {
          !error && !loading && weatherInfo && (
            <>
              <h2 className='weatherTitle'>
                {weatherInfo?.daily[0]?.weather[0]?.main}
              </h2>
              <h3 className="weatherDescription">
                In {city}, it is currently {weatherInfo?.current?.temp}°C with {weatherInfo?.current?.weather[0]?.description}
              </h3>
              <div className='cardContainer'>
                {weatherInfo?.daily?.map((day) => {
                  return <DailyCard 
                    weatherObject={day}
                  />
                })}
              </div>
            </>
          )
        }
      </div>
  )
}

export default App
