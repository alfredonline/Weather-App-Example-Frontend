import axios from "axios"

const baseUrl = 'http://localhost:3010/api/'

export const getWeather = async (location) => {
    try {
        const weatherInfo = await axios.get(`${baseUrl}weather/${location}`)
        return weatherInfo.data
    } catch (error) {
        console.error("error fetching weather", error.message)
        throw error
    }
}