import axios from "axios";

class AuthService {
  constructor() {
    this.baseUrl = process.env.API_URL;
  }

  async checkByMobile({mobile}) {
    try {
      const uri = `${this.baseUrl}/http://api.fees.busketbell.in/api/v1/teacher/check-by-mobile?mobile=${mobile}`;
      const response=await axios.get(uri);
      const data=await response.data;
      return data;
    } catch (error) {
      const data = await error.response.data;
      return data;
    }
  }
}
