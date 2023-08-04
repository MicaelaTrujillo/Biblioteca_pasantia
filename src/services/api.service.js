import { API } from "./connection";

const ApiService = {
    getAuthors: async () => {
        let response = null
        await API.get("/api/autores")
        .then((res) => {response=res})
        .catch((err) => {response=err.response ? err.response : {}})
        return response
    }
}

export default ApiService