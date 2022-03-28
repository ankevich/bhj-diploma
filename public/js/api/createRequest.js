/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  let request = new XMLHttpRequest();
  request.responseType = "json";

  request.addEventListener("readystatechange", () => {
    if (request.readyState === request.DONE) {
      options.callback(null, request.response);
    }
  });

  request.addEventListener("error", (error) => {
    options.callback(error);
  });

  let keys = options.data ? Object.keys(options.data) : []
  
  if (options.method == "GET") {
    let urlWithParams = options.url + "?" + keys
      .map(key => `${key}=${options.data[key]}`)
      .join("&")

    request.open("GET", urlWithParams);
    request.send();
  } else {
    let formData = new FormData();

    keys.forEach(key => {
      formData.append(key, options.data[key])
    })

    request.open(options.method, options.url);
    request.send(formData);
  }
};
