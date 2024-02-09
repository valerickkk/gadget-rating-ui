import axios from "axios";

const GADRAT_API_GADGET_URL = "http://localhost:8080/core/gadgets"

class GadgetService {

    createGadget(gadget) {
        return axios.post(GADRAT_API_GADGET_URL, gadget, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
    }

    getGadgetTypes() {
        return axios.get(GADRAT_API_GADGET_URL + '/types')
    }
}

export default new GadgetService();