const key ='7157e0cf113875b5e8eef103612f7726'

const requests = {
    requestsPoppular: `https://api.themoviedb.org/3/person/popular?api_key=${key}&language=en-US&page=1'`,
    requestsToprate: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestsTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=en-US`,
    requestsUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
}

export default requests