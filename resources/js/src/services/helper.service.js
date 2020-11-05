import axios from "axios";

import { API_URL } from "../_constants/utilities.constants";

class HelperService {

    getCourseName = async () => {
        try {
            const response =  await axios({
                method : "GET",
                url : `${API_URL}/course-name`,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization' : 'Bearer ' + localStorage.getItem('access_token'),
                }
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    };

}

export default new HelperService();