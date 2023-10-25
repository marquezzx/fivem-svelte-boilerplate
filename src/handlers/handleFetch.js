var resName = "boilerplate-svelte"
export async function handleFetch(action, payload, awaitResp) {
  const url = `https://${resName}/${action}`
  const requestOptions = {
    method: "POST",
  };
  if (payload) {
    requestOptions.body = JSON.stringify(payload);
  }
  if (!awaitResp) {
    return fetch(url, requestOptions);
  } else {
    const resp = await fetch(url, requestOptions);
    return resp.json();
  }
}