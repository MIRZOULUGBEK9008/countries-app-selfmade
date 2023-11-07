import loader from "./loader.js";

const request = async (extra = "all") => {
  loader(true);
  const req = await fetch(`https://restcountries.com/v3.1/${extra}`);
  if (req.ok && req.status === 200) {
    const res = await req.json();
    return res;
  } else {
    return new Error("Something went wrong :(");
  }
};

export default request;
