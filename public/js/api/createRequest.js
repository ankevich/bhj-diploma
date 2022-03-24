/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options) => {
    let request = new XMLHttpRequest();
    request.responseType = 'json'

    request.addEventListener("readystatechange", () => {
        if (request.readyState === request.DONE) {
            options.callback(null, request.response)
        } 
    });

    request.addEventListener('error', (error) => {
        options.callback(error)
    })

    request.open("GET", options.url);
    request.send();
};

createRequest({
    url: 'http://localhost:8000/user/current', // адрес
    data: { // произвольные данные, могут отсутствовать
      email: 'ivan@poselok.ru',
      password: 'odinodin'
    },
    method: 'GET', // метод запроса
    /*
      Функция, которая сработает после запроса.
      Если в процессе запроса произойдёт ошибка, её объект
      должен быть в параметре err.
      Если в запросе есть данные, они должны быть переданы в response.
    */
    callback: (err, response) => {
      console.log( 'Ошибка, если есть', err );
      console.log( 'Данные, если нет ошибки', response );
    }
  });