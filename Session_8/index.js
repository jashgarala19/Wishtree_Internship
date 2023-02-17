const axios = require("axios");

function getalbums() {
  return axios.get("https://jsonplaceholder.typicode.com/albums");
}

(async function () {
  const { data } = await getalbums();
  ///----------------------------------------
  data.forEach((d) => {
    console.log(`UserId: ${d.userId} | Title:${d.title}\n`);
  });

  ///----------------------------------------
  // for (const key in data) {
  //     if (Object.hasOwnProperty.call(data, key)) {
  //         const element = data[key];
  //         console.log(element.title)

  //     }
  // }

  ///----------------------------------------
  // for(const i in data) {
  //   if(data.hasOwnProperty(i)) {
  //     console.log(data[i])
  //   }
  // }
})();
