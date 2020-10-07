export  async function WeatherFunction (_event, _context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'meteo',
        }, null, 2),
    };
}
