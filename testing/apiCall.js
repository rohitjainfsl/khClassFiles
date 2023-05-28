import axios from "axios";

export async function fetchData() {
  try {
    const response = await axios.get("https://randomuser.me/api");
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
