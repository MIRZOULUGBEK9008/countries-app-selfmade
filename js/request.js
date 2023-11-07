import loader from "./loader.js";

const request = async (extra = "all") => {
  loader(true);
  const req = await fetch(`https://restcountries.com/v3.1/${extra}`);
  const res = await req.json();
  return res;
};

export default request;
