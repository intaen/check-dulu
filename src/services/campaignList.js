const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getListCampaign = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.slice(0, 10);
}