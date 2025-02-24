import axios from 'axios';

class AnalyseService {
  constructor() {
    this.baseUrl = process.env.API_URL;
  }

  async feesAnalysis({authToken}) {
    const uri = `${this.baseUrl}/api/v1/fees-history/analysis`;
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
  
  
  async studentAnalysis({authToken}) {
    const uri = `${this.baseUrl}/api/v1/teacher/student-analysis`;
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

const analyseService = new AnalyseService();

export {analyseService};
