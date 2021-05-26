import axios from "axios";
import { user } from "../stores.js"


export class PoiService {
  poiList = [];
  userList = [];
  baseUrl = "";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    if (localStorage.poi) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.poi);
    }
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
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email: email,
          token: response.data.token
        });
        localStorage.poi = JSON.stringify(response.data.token);
        return true;
      }
      return false;
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
        creator: user._id,
      };
      const response = await axios.post(this.baseUrl + "/api/" + user._id + "/pois", poi);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  }

  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      const response = await axios.post(this.baseUrl + "/api/users", userDetails);
      const newUser = await response.data;
      user.set(newUser);
      return true;
    } catch (error) {
      return false;
    }
  }

  async logout() {
    user.set({
      email: "",
      token: ""
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.poi = null;
  }

  async updateSettings(firstName, lastName, email, password, id) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        _id: id
      };
      console.log(userDetails);
      const response = await axios.put(`${this.baseUrl}/api/users/${id}`, userDetails);
      const newUser = await response.data;
      user.set(newUser);
      return true;
    } catch (error) {
      return false;
    }
  }

}
