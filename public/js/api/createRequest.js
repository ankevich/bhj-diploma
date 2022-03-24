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

  if (options.method == "GET") {
    request.open(
      "GET",
      `${options.url}?mail=${options.data.email}&password=${options.data.password}`
    );
    request.send();
  } else {
    let formData = new FormData();
    formData.append("mail", options.data.email);
    formData.append("password", options.data.password);

    request.open(options.method, options.url);
    request.send(formData);
  }
};
