import axios from "axios";

// const get = async url => {
//   try {
//     return await axios.get(url);
//   } catch (error) {
//     console.log();
//   }
// };

export function getDataDispatchFunction(url, func) {
  return function(dispatch) {
    axios({
      method: "get",
      url: url
    })
      .then(response => {
        if (response.status === 200) {
          dispatch(func(response.data));
        }
      })
      .catch(error => {
        // define the callback function in the case of error
        // dispatch(otherAction(error));
        console.log(error);
      });
  };
}
