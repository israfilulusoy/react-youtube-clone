import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "dbbedc9172msh5f8a4d35d5cf5eep16f763jsne74ee327fcab",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

// aldığı urli apinin temel linkine uç nokta olarak ekleyerek o linke istek atan yardımcı bir fonksiyon..
export const fetchDataFromApi = async url => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
