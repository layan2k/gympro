export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
    },
}

fetch(
    'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    exerciseOptions
)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err))

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}
