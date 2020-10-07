import axios from 'axios';

export async function WeatherFunction(_event, _context) {
    return await
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${process.env.WEATHER_API_KEY as string}`)
            .then(({ data }) => {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: data,
            }, null, 2),
        };
    }).catch(err => {
        return {
            statusCode: err.status,
            body: JSON.stringify({
                message: err.message,
            }, null, 2),
        };
    });

}
