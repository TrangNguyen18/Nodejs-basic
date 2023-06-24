const fetchData = (a1) => {
  return fetch("https://restcountries.com/v3/all")
    .then((sp) => {
      return sp.json();
    })
    .then((sp) => {
      const array = [];
      for (const n of a1) {
        array.push(sp[n].cca3);
      }
      return array;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

fetchData([1,2,3]).then((data) => {
  data.push (data[0]+ data[2]+data[2])
  console.log(data);
});
