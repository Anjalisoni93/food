import axios from "axios";

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer o6YQRSv7aQVWHMwWB9_d2rLsC5UZCGgBtUn8xVv9Aa56Ark_SU-ywOSlBA8O_iW7WBNy-78tZRotkCzZTSI6iQPTDsXPEnaL9uv4RhmuKuN2AH0efjxtEIPiF_QgY3Yx'
  }
});

