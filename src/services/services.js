import axios from 'axios';

export const getAccounts = async (name=null) => {
  const { data } = await axios.get(`${process.env.REACT_APP_BE_BASE}/accounts/${name}`);
  return data;
}

export const getAbilities = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_BE_BASE}/abilities`);
  return data;
}

export const postAccount = (data) => {
  let payload = { ...data };
   return axios.post(`${process.env.REACT_APP_BE_BASE}/accounts`, payload).then(({ status, data }) => {
    console.log(data);
    return {...data, status: data.status}
  });
}

export const postAbilities = (data) => {
  let payload = { ...data };
   return axios.post(`${process.env.REACT_APP_BE_BASE}/abilities`, payload).then(({ status, data }) => {
    console.log(data);
    return {...data, status: data.status}
  });
}