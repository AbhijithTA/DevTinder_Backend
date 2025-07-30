const getData = async () => {
  try {
    const res = await fetch("https://json.API");
    const data = await res.json();
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};
