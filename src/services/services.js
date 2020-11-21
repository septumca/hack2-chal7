import axios from 'axios';

export const getAllItems = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_BE_BASE}/items`);
  return data;
}

export const getItemData = async (id=null) => {
  const { data } = await axios.get(`${process.env.REACT_APP_BE_BASE}/items/${id}`);
  return data;
}

export const getAccounts = async (name=null) => {
  const { data } = await axios.get(`${process.env.REACT_APP_BE_BASE}/accounts/${name}`);
  return data;
}

export const getAbilities = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_BE_BASE}/abilities`);
  return data;
}

export const postAccount = async (payload) => {
  const { data } = await axios.post(`${process.env.REACT_APP_BE_BASE}/accounts`, payload);
  return data;
}

export const createAbility = async (payload) => {
  const { data } = await axios.post(`${process.env.REACT_APP_BE_BASE}/abilities`, payload);
  return data;
}


export const createEvent = async (payload) => {
  const { data } = await axios.post(`${process.env.REACT_APP_BE_BASE}/events`, payload);
  return data;
}

export const getEvents = async (id=null) => {
  const { data } = await axios.get(`${process.env.REACT_APP_BE_BASE}/accounts/${id}/events`);
  return data;
}

export const login = async (name) => {
  const { status, data } = await axios.post(`${process.env.REACT_APP_BE_BASE}/accounts/login`, { name });
  if(status === 401) {
    return null;
  }
  return data;
}

export const createProfile = async (userData) => {
  const { data } = await axios.post(`${process.env.REACT_APP_BE_BASE}/accounts`, userData);
  return data;
}