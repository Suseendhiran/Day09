function xmlCall(url) {
  var req = new XMLHttpRequest();
  var responseData;
  req.open("GET", url, true);
  req.send();

  req.onload = function () {
    responseData = JSON.parse(req.response);
  };
  if (responseData) {
    console.log(responseData);
  }
}

var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v2/all", true);
req.send();
req.onload = function () {
  let result = JSON.parse(req.response);
  console.log(result);
  const asianCountries = result.filter((country) => country.region === "Asia");

  const populationLessThanTwoLakhs = result.filter(
    (country) => country.population < 200000
  );

  const usCurrenciesCountries = result
    .filter((country) => {
      if (country.currencies)
        return country.currencies.some((currency) => currency.code === "USD");
    })
    .map((country) => country.name);

  const totalPopulation = result
    .map((country) => country.population)
    .reduce((acc, curr) => acc + curr);

  result.forEach((country) => {
    console.log(
      `Name:${country.name}
       Capital:${country.capital} 
       Flag:${country.flag[0]}
      `
    );
  });
  console.log("Asian countries", asianCountries);
  console.log("populationLessThanTwoLakhs", populationLessThanTwoLakhs);
  console.log("Total Population", totalPopulation);
  console.log("US currencies", usCurrenciesCountries);
  //console.log("Details", details);
};
