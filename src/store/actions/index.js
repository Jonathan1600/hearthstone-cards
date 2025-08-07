import axios from "axios"
import qs from "qs";
export const FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS"
export const FETCH_CARDS_START = "FETCH_CARDS_START"
export const FETCH_CARDS_FAILURE = "FETCH_CARDS_FAILURE"
export const FETCH_AUTH_SUCCESS = "FETCH_AUTH_SUCCESS"
export const FETCH_AUTH_START = "FETCH_AUTH_START"
export const FETCH_AUTH_FAILURE = "FETCH_AUTH_FAILURE"

export const fetchData = () => {
        return (dispatch, getState) => {
            const auth = getState().authToken;
        if (!auth) {
            dispatch({ type: FETCH_CARDS_FAILURE, payload: "Missing access token" });
            return;
        }
        dispatch({ type: FETCH_CARDS_START });

        const options = {
            method: 'GET',
            url: 'https://us.api.blizzard.com/hearthstone/cards?locale=en_US',
            headers: {
                'Authorization': `Bearer ${auth}`
            }
        };

        axios.request(options).then(function (res) {

            dispatch({ type: FETCH_CARDS_SUCCESS, payload: res.data });
        }).catch(function (err) {
            dispatch({ type: FETCH_CARDS_FAILURE, payload: err.message });
        });
    }
}

export const fetchAuthToken = () => {
    const clientId = process.env.REACT_APP_BLIZZARD_CLIENTID
    const secret = process.env.REACT_APP_BLIZZARD_SECRET
    const basicAuth = btoa(`${clientId}:${secret}`);
    return (dispatch) => {
        dispatch({ type: FETCH_AUTH_START });

        const options = {
            method: 'POST',
            url: 'https://oauth.battle.net/token',
            grant_type: "client_credentials",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${basicAuth}`,
              },
            data: qs.stringify({ grant_type: "client_credentials" }),
        };

        axios.request(options).then(function (res) {

            dispatch({ type: FETCH_AUTH_SUCCESS, payload: res.data });
        }).catch(function (err) {
            dispatch({ type: FETCH_AUTH_FAILURE, payload: err.message });
        });
    }
}


