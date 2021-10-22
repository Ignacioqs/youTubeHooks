import axios from "axios";

const KEY = "AIzaSyAfK3ksrfrhVa95C7kBp6r0g5mChBONMjk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
