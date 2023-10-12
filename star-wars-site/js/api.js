async function fetchPeople(number) {
  try {
    const apiResponse = await fetch(
      `https://swapi.dev/api/people/?page=${number}`
    );
    if (apiResponse.status === 200) {
      const data = await apiResponse.json();
      console.log(data);
      return data.results;
    }
  } catch (error) {
    return error;
  }
}
