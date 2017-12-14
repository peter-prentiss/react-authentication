import axios from 'axios';
import history from "../utils/historyUtils";

const ROOT_URL = 'http://localhost:3090';

export function signInUser({ email, password }) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                history.push('/feature');
            })
            .catch(() => {

            });
    }
}