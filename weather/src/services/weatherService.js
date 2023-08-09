import { DateTime } from "luxon";

const API_KEY = '3209f504a1b4692bd2d5c96e35b404c3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/`;

const getWeatherData = async(infoType, searchParams) => {
    const url = new URL(ROOT_URL + infoType);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY});
    return await fetch(url)
        .then((res) => res.json())
};

const formatCurrentWeather = async(data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data;

    const {main: details, icon} =  weather[0]
    return {lat, lon, temp, feels_like, temp_min, temp_max,
        humidity, name, dt, country, sunrise, sunset, details, icon, speed};
}

const formatForecastWeather = async (data) => {
    let {timezone, daily, hourly} = data;
    daily = await daily.slice(1, 6).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    });
    hourly = await hourly.slice(1, 6).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon
        }
    });
    return {timezone,daily,hourly};
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams)
    .then(formatCurrentWeather)
    
    const {lat, lon} = formattedCurrentWeather;
    console.log(lat,lon);
    const formattedForecastWeather = await getWeatherData('onecall', {
        lat, lon, exclude: 'current,minutely,alerts', units: searchParams.units,})
        .then(formatForecastWeather)
    

    return {...formattedCurrentWeather, ...formattedForecastWeather};
    // return {...formattedCurrentWeather};

}

const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local Time: 'hh:mm a") => DateTime.fromSeconds(secs).
setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`

export default getFormattedWeatherData;
    
export { formatToLocalTime, iconUrlFromCode };