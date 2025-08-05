import axios from "axios"
export const FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS"
export const FETCH_CARDS_START = "FETCH_CARDS_START"
export const FETCH_CARDS_FAILURE = "FETCH_CARDS_FAILURE"

export const fetchData = () => {
    const auth = process.env.REACT_APP_BLIZZARD_AUTH
    return (dispatch) => {
        dispatch({ type: FETCH_CARDS_START });
        console.log( "AUTH",auth)

        const options = {
            method: 'GET',
            url: 'https://us.api.blizzard.com/hearthstone/cards?locale=en_US',
            headers: {
                'Authorization': `Bearer ${auth}`
            }
        };

        axios.request(options).then(function (res) {

            console.log("Response Data:", res.data);
            dispatch({ type: FETCH_CARDS_SUCCESS, payload: res.data });
        }).catch(function (err) {
            console.error(err);
            dispatch({ type: FETCH_CARDS_FAILURE, payload: err.message });
        });
    }
}


