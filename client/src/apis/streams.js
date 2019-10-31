import axios from 'axios';

const api = axios.create({
  headers: {
    'Client-ID': '3pnabxx6ec2530r1bhn8s0unlbswj3'
  }
});

export default api;