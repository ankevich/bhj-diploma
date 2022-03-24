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

  const email = options.data ? options.data.email : "";
  const password = options.data ? options.data.password : "";

  if (options.method == "GET") {

    request.open("GET", `${options.url}?mail=${email}&password=${password}`);
    request.send();
  } else {
    let formData = new FormData();
    formData.append("mail", email);
    formData.append("password", password);

    request.open(options.method, options.url);
    request.send(formData);
  }
};
