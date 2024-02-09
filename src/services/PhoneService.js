import axios from "axios";

const GADRAT_API_PHONES_URL = "http://localhost:8080/core/phones"

class PhoneService {

    getPhones() {
        return axios.get(GADRAT_API_PHONES_URL);
    }

    getPhoneById(id) {
        return axios.get(GADRAT_API_PHONES_URL + '/' + id);
    }
}

export default new PhoneService();