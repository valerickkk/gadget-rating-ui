import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/grbcknd/phones"

class PhoneService {

    getPhones() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    getPhoneById(id) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + id);
    }
}

export default new PhoneService();