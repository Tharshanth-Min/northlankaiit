import axios from "axios";
import { LOCAL_STORAGE_USER } from "../_constants/storage";

import { API_URL } from "../_constants/utilities.constants";

class AuthService {

    login = async (props) => {

        try{
            const response = await axios({
                method: 'POST',
                url: `${API_URL}/login`,
                data: {
                    user_name: props.userName,
                    password: props.password,
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            const { access_token: AccessToken, user } = response.data;
            localStorage.setItem('access_token', AccessToken);
            localStorage.setItem('isAuthenticated', "true");
            // localStorage.setItem('LOCAL_STORAGE_USER', JSON.stringify(user));
            localStorage.setItem('LOCAL_STORAGE_USER', user.user_name);

            const stateObj = {
                isAuthenticated: true,
                user,
            };
            return stateObj;
        }catch(error){
            const {status, errors} = error.response.data;
            const data = {
                status,
                errors
            };
            throw data;
        }
    };

    register = async (props) => {

        try {
            const response = await axios({
                method: 'post',
                url: `${API_URL}/register`,
                data: {
                    user_name: props.userName,
                    user_type: props.userType.name,
                    first_name: props.firstName,
                    last_name: props.lastName,
                    email: props.email,
                    password: props.password,
                    password_confirmation: props.passwordConfirmation,
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            return response.data;
        }catch(error) {
            const {status, errors} = error.response.data;
            const data = {
                status,
                errors
            };
            throw data;
        }
    };

    logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('LOCAL_STORAGE_USER');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userType')
    };
}


export default new AuthService();