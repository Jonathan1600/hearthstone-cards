import axios from "axios"
export const FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS"
export const FETCH_CARDS_START = "FETCH_CARDS_START"
export const FETCH_CARDS_FAILURE = "FETCH_CARDS_FAILURE"

export const fetchData = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_CARDS_START });




        const options = {
            method: 'GET',
            url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/classic',
            headers: {
                'x-rapidapi-key': '459a9b1ebemsh065f357eeb6b253p18a538jsnd497d7ccee7d',
                'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (res) {

            console.log(res.data);
            dispatch({ type: FETCH_CARDS_SUCCESS, payload: res.data });
        }).catch(function (err) {
            console.error(err);
            dispatch({ type: FETCH_CARDS_FAILURE, payload: err.message });
        });
    }
}


