const URL = 'https://git-jobs-server.herokuapp.com/api';

const checkStatus = response =>
    (response.statusText === 'OK')
        ? Promise.resolve(response)
        : Promise.reject(new Error(response.statusText));

export async function searchJobsByLocation(location) {
  const response = await fetch(
      `${URL}/jobs/location/${location}`);
  const data = await checkStatus(response);

  return data.json();
}

export async function searchJobsByDescription(description) {
  const response = await fetch(
      `${URL}/jobs/description/${description}`);
  const data = await checkStatus(response);

  return data.json();
}

export async function searchJobsByLocAndDesc(location, description) {
  const response = await fetch(
      `${URL}/jobs/${location}/description/${description}`);
  const data = await checkStatus(response);

  return data.json();
}