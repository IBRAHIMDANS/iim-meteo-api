export  async function  HelloFunction (_event, _context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'hello world',
        }, null, 2),
    };
}
