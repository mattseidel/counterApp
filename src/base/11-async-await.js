export const getImagen = async () => {

    try {

        const apiKey = 'gI5RghXZfAQhl2m7rZfKmcB5h8Uwjjj3';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;
        return url
    } catch (error) {

        return 'No existe'
    }



}

getImagen();



