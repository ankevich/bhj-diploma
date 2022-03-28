/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element)
    this.renderAccountsList()
  }

    /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    Account.list(null, (err, response) => {
      if(response && response.data) {
        let selects = Array.from(document.querySelectorAll(".accounts-select"))
        selects.forEach(select => {
          select.innerHTML = ""
          response.data.forEach(account => {
            select.innerHTML += `<option value="${account.id}">${account.name}</option>`
          })
        })
      }
    })
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {
    console.log('transaction submit', data)
    Transaction.create(data, (err, response) => {
      if (response) {
        App.update()
        this.element.reset()
      }
      App.getModal("newIncome").close()
      App.getModal("newExpense").close()
    });
  }
}