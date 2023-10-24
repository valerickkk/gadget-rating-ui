import axios from "axios";

const GADRAT_API_GADGET_URL = "http://localhost:8080/grbcknd/companies"

class CompanyService {

    getCompanies() {
        return axios.get(GADRAT_API_GADGET_URL)
    }
}

export default new CompanyService();