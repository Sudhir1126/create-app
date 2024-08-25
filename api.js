// functions/api.js
const handler = async (event) => {
    if (event.httpMethod === 'POST') {
        const { data } = JSON.parse(event.body);
        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => isNaN(item));
        const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
        const highestLowercaseAlphabet = lowercaseAlphabets.sort().slice(-1);

        return {
            statusCode: 200,
            body: JSON.stringify({
                is_success: true,
                user_id: "sudhir_venkatesh_25081999",
                email: "sudhir@example.com",
                roll_number: "VIT1234",
                numbers,
                alphabets,
                highest_lowercase_alphabet: highestLowercaseAlphabet
            }),
        };
    } else if (event.httpMethod === 'GET') {
        return {
            statusCode: 200,
            body: JSON.stringify({ operation_code: 1 }),
        };
    } else {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' }),
        };
    }
};

export { handler };
