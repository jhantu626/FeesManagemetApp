import axios from 'axios';

class AuthService {
  constructor() {
    this.baseUrl = process.env.API_URL;
  }

  async checkByMobile({mobile}) {
    try {
      const uri = `${this.baseUrl}/api/v1/teacher/check-by-mobile?mobile=${mobile}`;
      const response = await axios.get(uri);
      const data = await response.data;
      //   console.log(data);
      return data;
    } catch (error) {
      const data = await error.response.data;
      return data;
    }
  }

  async login({mobile}) {
    try {
      const uri = `${this.baseUrl}/api/v1/auth/login?mobile=${mobile}`;
      console.log(uri);
      const response = await axios.post(uri);
      const data = await response.data;
      console.log(uri);
      return data;
    } catch (error) {
      const data = await error.response.data;
      return data;
    }
  }

  async validateOtp({mobile, otp}) {
    const uri = `${this.baseUrl}/api/v1/auth/validate-otp?mobile=${mobile}&otp=${otp}`;

    try {
      const response = await axios.get(uri);
      const data = await response.data;
      return data;
    } catch (error) {
      const data = await error.response.data;
      return data;
    }
  }
}

const authService = new AuthService();

export {authService};
