import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "122b1f46b42a627efeb517d519733307",
  },
});

//API Key: https://www.themoviedb.org/settings/api

// API Read Access Token
//eyJhbGciOiJIUzI1NiJ9
//   .eyJhdWQiOiIxMjJiMWY0NmI0MmE2MjdlZmViNTE3ZDUxOTczMzMwNyIsInN1YiI6IjY1NTE4ODE4OTY1M2Y2MTNmNDczNzJiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ
//   .ZBwCWyh0zCEU00NcTwI0oyOMXjjsFPhATXEMthxLS_w;
