import axios from 'axios';

const baseURL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const api = axios.create({
    baseURL,
    headers: {
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
        'x-rapidapi-key': 'dec78f7375mshceef5af39749fb7p173fa5jsnae3ec430ff01'
    }
});

export const getPlaces = async (params) => {
    const { countryIds, namePrefix, limit, offset } = params;
    try {
        const response = await api.get(`/cities`, {
            params: {
                countryIds,
                namePrefix,
                limit,
                offset,
            }
        });
        return response.data;
    } catch (error) {
        console.log('Error fetching places: ', error);
        throw error;
    }
}