
export function fetch (url, customHeaders, options) {
  const headers =  {
    'Accept': 'application/json',
    ...customHeaders
  }

  return window.fetch(url, {headers, ...options})
    .then(res => res.json())
}