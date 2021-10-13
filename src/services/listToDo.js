import axios from 'axios'

const baseURL = 'http://localhost:5000/api'

const getList = () => axios.get(`${baseURL}/list`).then((res) => res.data)

const createTask = (data) => axios.post(`${baseURL}/add`, data)

const updateTask = (data) => axios.put(`${baseURL}/edit`, data)

const deleteTask = (id) => axios.delete(`${baseURL}/delete`, { data: { id } })

export { getList, createTask, updateTask, deleteTask }
