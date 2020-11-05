import axios from "axios";

import { API_URL } from "../_constants/utilities.constants";

class NewsGalleryService {

    create = async (props) => {
        try {
            const response = await axios({
                method: 'POST',
                url: `${API_URL}/news-gallery`,
                data : {
                    news_id : props.news_id,
                    image: props.image,
                    image_name : props.imageName,
                    image_size: props.imageSize,
                    type : props.type
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
                url: `${API_URL}/news-gallery/${galleryId}?per_page=${perPage}`,
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
                url : `${API_URL}/news-gallery/${id}`,
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
            url: `${API_URL}/news-gallery/${props.id}`,
            data: {
                news_id : props.news_id,
                image: props.image,
                image_name : props.imageName,
                image_size: props.imageSize,
                type : props.type
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

    delete = async (props) => {

        await axios({
            method: 'DELETE',
            url: `${API_URL}/remove-news-image`,
            data : {
                news_id : props.news_id,
                id : props.id
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
    }

}

export default new NewsGalleryService();