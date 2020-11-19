import axios from 'axios';


export const getAllItems = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_BE_BASE}/items`);
  return data;
}

export const getItemData = async (id=null) => {
  const { data } = await axios.get(`${process.env.REACT_APP_BE_BASE}/items/${id}`);
  return data;
}