import axios from 'axios';

class FeesService {
  constructor() {
    this.baseUrl = process.env.API_URL;
  }

  async feesHistoryInRange({authToken, pageNo, pageSize}) {
    const uri = `${this.baseUrl}/api/v1/fees-history/teacher/range?pageNo=${pageNo}&size=${pageSize}`;
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

const feesService = new FeesService();

export {feesService};
