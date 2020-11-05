import axios from "axios";

import { API_URL } from "../_constants/utilities.constants";

class AlbumService {
    create = async (props) => {
        try {
            const response = await axios({
                method: 'POST',
                url: `${API_URL}/album`,
                data : {
                    image: props.image,
                    gallery_id : props.gallery_id,
                    image_name : props.imageName,
                    image_size: props.imageSize,
                    type: props.type
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization' : 'Bearer ' + localStorage.getItem('access_token'),
                }
            });

            return response.data;
        } catch (error) {
            console.error(
                `Error Fetching the data: ${error}`,
            );
            throw error;
        }
    };

    getAll = async (perPage, page, searchquery, galleryId) => {
        try {
            const response = await axios({
                method: 'GET',
                url: `${API_URL}/album/${galleryId}?per_page=${perPage}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            });

            return response.data;
        } catch (error) {
            console.error(
                `Error Fetching the data: ${error}`,
            );
            throw error;
        }
    };

    getById = async (id) => {
        try {
            const response =  await axios({
                method : "GET",
                url : `${API_URL}/album/${id}`,
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

    update = async (props) => {

        await axios({
            method: 'put',
            url: `${API_URL}/album/${props.id}`,
            data: {
                image: props.image,
                image_name : props.imageName,
                image_size: props.imageSize,
                type: props.type
            },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization' : 'Bearer ' + localStorage.getItem('access_token'),
            }
        }).then((response) => {
            const data = JSON.stringify(response.data);
            return data;
        }).catch((error) => {
            console.log(error);
            throw error;
        });
    };

    delete = async (id) => {

        await axios({
            method: 'DELETE',
            url: `${API_URL}/album/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization' : 'Bearer ' + localStorage.getItem('access_token'),
            }
        }).then((response) => {
            const data = JSON.stringify(response.data);
            return data;
        }).catch((error) => {
            console.log(error);
            throw error;
        });
    }

}

export default new AlbumService();