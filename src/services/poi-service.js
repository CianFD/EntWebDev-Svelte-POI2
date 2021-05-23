import axios from "axios";

export class PoiService {
  poiList = [];
  userList = [];
  baseUrl = "";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getPois() {
    try {
      const response = await axios.get(this.baseUrl + "/api/pois");
      this.poiList = response.data;
      return this.poiList;
    } catch (error) {
      return [];
    }
  }

  async getUsers() {
    try {
      const response = await axios.get(this.baseUrl + "/api/users");
      this.userList = response.data;
      return this.userList;
    } catch (error) {
      return [];
    }
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
      user.set(response.data);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  }

  async addPoi(name, description, longitude, latitude, user) {
    try {
      const poi = {
        name: name,
        description: description,
        longitude: longitude,
        latitude: latitude,
        creator: user,
      };
      const response = await axios.post(this.baseUrl + "/api/users/" + user._id + "/pois", poi);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  }

}
