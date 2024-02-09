import axios from "axios";

const GADRAT_AUTH_API_URL = "http://localhost:8080/auth"
const postRqConfig = {
    headers: {
      'Content-Type': 'application/json'
    }
}

class UserService {

    register(newUser) {
        return axios.post(GADRAT_AUTH_API_URL + '/register', newUser, {
            headers: {
              'Content-Type': 'application/json'
            }
        });
    }

    login(credentials) {
        return axios.post(GADRAT_AUTH_API_URL + '/login', credentials, {
            headers: {
              'Content-Type': 'application/json'
            }
        });
    }
}

export default new UserService();