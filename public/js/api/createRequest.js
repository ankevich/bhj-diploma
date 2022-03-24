/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options) => {
    let request = new XMLHttpRequest()
    request.responseType = 'json'
    
    request.addEventListener("readystatechange", () => {
        if (request.readyState === request.DONE) {
            options.callback(null, request.response)
        } 
    });

    request.addEventListener('error', (error) => {
        options.callback(error)
    })

    if (options.method == 'GET') {
        request.open("GET", `${options.url}?mail=${options.data.email}&password=${options.data.password}`);
        request.send();
    } else {
        let formData = new FormData()
        formData.append('mail', options.data.email)
        formData.append('password', options.data.password)
    
        request.open(options.method, options.url);
        request.send(formData);
    }

    
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