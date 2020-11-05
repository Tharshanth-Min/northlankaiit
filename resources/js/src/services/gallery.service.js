import axios from "axios";
import { API_URL } from "../_constants/utilities.constants";

class GalleryService {
    create = async (props) => {
        try {
            const response = await axios({
                method: 'POST',
                url: `${API_URL}/gallery`,
                data : {
                    image: props.image,
                    image_name : props.imageName,
                    image_size: props.imageSize,
                    title : props.title,
                    description : props.description,
                    gallery_type_id: props.galleryType.id,
                    gallery_type_name: props.galleryType.type,
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

    getAll = async (perPage, page, searchquery) => {
        try {
            const response = await axios({
                method: 'GET',
                url: `${API_URL}/gallery?per_page=${perPage}&page=${(parseInt(page) + 1)}&searchquery=${searchquery}`,
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

    getById = async (id) => {
        try {
            const response =  await axios({
                method : "GET",
                url : `${API_URL}/gallery/${id}`,
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
            url: `${API_URL}/gallery/${props.id}`,
            data: {
                image: props.image,
                image_name : props.imageName,
                image_size: props.imageSize,
                title : props.title,
                description : props.description,
                gallery_type_id: props.galleryType.id,
                gallery_type_name: props.galleryType.type,
                type: props.type
            },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization' : 'Bearer ' + localStorage.getItem('access_token'),
            }
        }).then((response) => {
            const date = JSON.stringify(response.data);
            return date;
        }).catch((error) => {
                console.log(error);
                throw error;
            });
    };

    delete = async (id) => {

        await axios({
            method: 'DELETE',
            url: `${API_URL}/gallery/${id}`,
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

export default new GalleryService();