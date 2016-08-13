import axios from 'axios'

export function getMyProjects (){
    return axios.get(`http://localhost:8080/api/projectData`)
        .then(function (data) {
            return data;
        })
        .catch(function (data) {
            return data
        });

}

export function getProjectInfo (id) {
    return axios.get(`http://localhost:8080/api/projectInfo/${id}`)
        .then(function (data) {
            return data;
        })
        .catch(function (data) {
            return data
        });

}

export function  getMyData () {
    return axios.get(`http://localhost:8080/api/myData`)
        .then(function (data) {
            return data;
        })
        .catch(function (data) {
            return data
        });

}


