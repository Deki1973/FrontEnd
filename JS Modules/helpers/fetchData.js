const fetchData = async () => {
  try {
    const urlExample = "https://jsonplaceholder.typicode.com/todos/1";

    const response = await fetch(urlExample);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
