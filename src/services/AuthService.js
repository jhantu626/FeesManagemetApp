import axios from 'axios';

class AuthService {
  constructor() {
    this.baseUrl = process.env.API_URL;
  }

  async checkByMobile({mobile}) {
    try {
      const uri = `${this.baseUrl}/api/v1/teacher/check-by-mobile?mobile=${mobile}`;
      console.log(uri);
      const response = await axios.get(uri);
      const data = await response.data;

      return data;
    } catch (error) {
      console.log(error);
      const data = await error.response.data;
      return data;
    }
  }
}

const authService = new AuthService();

export {authService};
