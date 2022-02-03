import axios from "axios";

type typeParams = {
  params: {
    q: string;
    appid: string;
  };
};

// const fetchOpapGames = ({ params }: typeParams) = > {
//     return axios.create({
//         method: "GET",
//         url: "https://api.opap.gr/draws/v3.0/1100/visual-draw/928881",
//         headers;{
//             "Content-type":'application/json'
//     },
//         params
//     });
// }
// export {fetchOpapGames}
