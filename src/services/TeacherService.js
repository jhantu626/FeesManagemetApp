import axios from 'axios';

class TeacherService {
  constructor() {
    this.baseUrl = process.env.API_URL;
  }

  async fetchTeacherProfile({authToken}) {
    const uri = `${this.baseUrl}/api/v1/teacher/only-profile`;
    try {
      const response = await axios.get(uri, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data = await response.data;
      return data;
    } catch (error) {
      const data = await error.response.data;
      return data;
    }
  }
}

const teacherService = new TeacherService();

export {teacherService};
