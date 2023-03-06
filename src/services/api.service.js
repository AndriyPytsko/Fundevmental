import axios from "axios";

class ApiService {
  async getPersons() {
    return axios
      .get(process.env.REACT_APP_BASE_API_URL + "/persons")
      .then((res) => res.data);
  }

  async updatePerson(person) {
    return axios
      .put(process.env.REACT_APP_BASE_API_URL + "/persons/" + person.id, person)
      .then((res) => res.data);
  }

  async createPerson(person) {
    return axios
      .post(process.env.REACT_APP_BASE_API_URL + "/persons", person)
      .then((res) => res.data);
  }

  async deletePerson(id) {
    return axios
      .delete(process.env.REACT_APP_BASE_API_URL + "/persons/" + id)
      .then((res) => res.data);
  }
}

export default new ApiService();
