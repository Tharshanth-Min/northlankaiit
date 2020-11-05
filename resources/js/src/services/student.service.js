import axios from "axios";
import moment from 'moment'

import { API_URL } from "../_constants/utilities.constants";

class StudentService {
    create = async (props) => {
        try {
            const response = await axios({
                method: 'POST',
                url: `${API_URL}/student`,
                data : {
                    title: props.title,
                    firstName: props.firstName,
                    lastName: props.lastName,
                    courseName: props.courseName.id,
                    dateOfBirth: moment(props.dateOfBirth).format('YYYY-MM-DD'),
                    nameCertification: props.certificationName,
                    gender: props.gender,
                    nicPassportNo: props.nicOrPassport,
                    nationality: props.nationality,
                    personalNum: props.personalNo,
                    homeNum: props.homeNo,
                    officeNum: props.officeNo,
                    address: props.address,
                    email: props.email,
                    workExpe : props.workExpe,
                    otherQuali : props.otherQuali,
                    checkedOl : props.checkedOl,
                    checkedAl : props.checkedAl,

                    olMath : props.olMath,
                    olScience : props.olScience,
                    olEnglish : props.olEnglish,
                    ol_year_examination : moment(props.olYear).format('YYYY-MM-DD'),
                    ol_index_no : props.olIndex,
                    olRemark : props.olRemark,

                    stream_type : props.streamType.id,
                    al_year_examination : moment(props.alYear).format('YYYY-MM-DD') ,
                    al_index_no : props.alIndex,

                    biology : props.biology,
                    physics : props.physics,
                    chemistry : props.chemistry,
                    agriculturalScience : props.agriculturalScience,
                    english : props.english,

                    combinedMathematics : props.combinedMathematics,
                    ict : props.ict,

                    economics : props.economics,
                    accounting : props.accounting,
                    businessStudies : props.businessStudies,

                    tamil : props.tamil,
                    hinduCulture : props.hinduCulture,
                    artEconomics : props.artEconomics,
                    politic : props.politic,
                    geographic : props.geographic,
                    artRemark : props.artRemark,

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
                url: `${API_URL}/student?per_page=${perPage}&page=${(parseInt(page) + 1)}&searchquery=${searchquery}`,
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
                url : `${API_URL}/student/${id}`,
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
            url: `${API_URL}/student/${props.id}`,
            data: {
                title: props.title,
                firstName: props.first_name,
                lastName: props.last_name,
                courseName: props.courseName.id,
                dateOfBirth: moment(props.date_of_birth).format('YYYY-MM-DD'),
                nameCertification: props.certification_name,
                gender: props.gender,
                nicPassportNo: props.nic_or_passport_no,
                nationality: props.nationality,
                personalNum: props.tell_phone_personal,
                homeNum: props.tell_phone_home,
                officeNum: props.tell_phone_office,
                address: props.address,
                email: props.email,
                workExpe : props.work_exp,
                otherQuali : props.other_quali,
                checkedOl : props.checkedOl,
                checkedAl : props.checkedAl,

                olRemark : props.olRemark,
                olId : props.olId,
                olMath : props.olMath,
                olScience : props.olScience,
                olEnglish : props.olEnglish,
                ol_year_examination : moment(props.olYear).format('YYYY-MM-DD'),
                ol_index_no : props.olIndex,

                alId : props.alId,
                stream_type : props.streamType.id,
                al_year_examination : moment(props.alYear).format('YYYY-MM-DD') ,
                al_index_no : props.alIndex,

                //SCIENCE STREAM
                scieId : props.scieId,
                sciechemistry : props.sciechemistry,
                sciephysics : props.sciephysics,
                sciebiology : props.sciebiology,
                agriculturalScience : props.agriculturalScience,
                scieenglish : props.scieenglish,

                //MATH STREAM
                mathId : props.mathId,
                combined_mathematics : props.combined_mathematics,
                mathchemistry : props.mathchemistry,
                mathphysics : props.mathphysics,
                mathenglish : props.mathenglish,
                mathict : props.mathict,


                //COMMERCE STREAM
                comId : props.comId,
                economics : props.economics,
                accounting : props.accounting,
                business_studies : props.business_studies,
                comict : props.comict,
                comenglish : props.comenglish,

                //ART STREAM
                artId : props.artId,
                tamil : props.tamil,
                hinduCulture : props.hinduCulture,
                artEconomics : props.artEconomics,
                politic : props.politic,
                geographic : props.geographic,
                artEnglish : props.artEnglish,
                artRemark : props.artRemark,
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
            url: `${API_URL}/student/${id}`,
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

export default new StudentService();