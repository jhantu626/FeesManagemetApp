import axios from 'axios';

class StudentService {
  constructor() {
    this.baseUri = process.env.API_URL;
  }

  async getStudents({authToken, isRecent = false}) {
    const uri = `${this.baseUri}/api/v1/student/students?isRecent=${isRecent}`;
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

const studentService = new StudentService();

export {studentService};
