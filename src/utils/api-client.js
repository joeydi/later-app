const localStorageKey = "__auth__";

async function client(endpoint, { body, ...customConfig } = {}) {
  const auth = JSON.parse(window.localStorage.getItem(localStorageKey));
  const headers = { "content-type": "application/json" };

  if (auth && auth.token) {
    headers.Authorization = `Token ${auth.token}`;
  }

  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  return window.fetch(`http://127.0.0.1:8000/${endpoint}`, config).then(async (r) => {
    if (r.status === 401) {
      window.localStorage.removeItem(localStorageKey);
      window.location.assign(window.location);
      return;
    }

    const data = await r.json().catch(() => ({}));

    if (r.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export { client, localStorageKey };
