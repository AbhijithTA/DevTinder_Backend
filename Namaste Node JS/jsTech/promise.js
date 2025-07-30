function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!url.startsWith("http")) {
        reject(new Error("Invalid URL"));
      } else {
        resolve(`Data fetched from ${url}`);
      }
    }, 1000);
  });
}

fetchData("http://example.com")
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
