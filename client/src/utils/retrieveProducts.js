export default async function (url) {
  let data = null;
  try {
    const response = await fetch(url);
    data = await response.json();
    return data;
  } catch (err) {
    console.log(`Error during fetch: ${err}`);
    return data;
  }
}
