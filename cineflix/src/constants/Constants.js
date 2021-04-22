class Constants {
    static URL = {
        BASE_URL: "https://nijinserver.herokuapp.com/dummy/cineflex/",
        LOTTERY: (mobile) => `lottery?mobile=${mobile}`,
        GET_MOVIES: (pageNo) => `movies?page=${pageNo}`,
        GET_BOOKING_PREFERENCES: `cineflex/preferences`,
        BOOK: (language, food, parking) => `book?language=${language}&food=${food}&parking=${parking}`,

    }

}
export default Constants