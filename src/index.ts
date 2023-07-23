import axios from "axios";
import { getAxiosClient } from "./axiosClient";

const instance = getAxiosClient('https://92bab8eb-08fa-4817-bd24-56727e0c0778.mock.pstmn.io');

async function getPost(status: number) {
  try {
    const response = await instance.post(`/post/${status}`);
    console.log(response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
    } else {
      console.log(error);
    }
  }
}

getPost(401);