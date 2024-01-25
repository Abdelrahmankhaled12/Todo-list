import axios from 'axios';
// URL API SERVER
const KEY = "http://127.0.0.1:8000/";

const APIURL = KEY + "api/items"

// Function Responsible for calling data
export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(KEY + "api/" + url);
        return data;
    } catch (err) {
        console.log(err);
        return err
    }
}

// Function Responsible for sending a command to the API by adding a new task
export const ADD_TASK = (task) => {
    return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('description', task);
        fetch(APIURL, {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data)
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

// Function Responsible for sending a command to the API to delete a specific task
export const REMOVE_TASK = (taskID) => {
    return new Promise((resolve, reject) => {
        fetch(`${APIURL}/${taskID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

// Function Responsible for sending a command to the API to change the status of the task from incomplete to complete
export const COMPLETED_TASK = (taskID) => {
    return new Promise((resolve, reject) => {
        fetch(`${APIURL}/${taskID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

