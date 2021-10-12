import axios from 'axios'

const baseURL = 'http://localhost:5000/api'

const getList = (data) =>
  axios.get(`${baseURL}/list`).then((res) => (data = res.data))

const createTask = (data) => axios.post(`${baseURL}/add`, data)

export { getList, createTask }
