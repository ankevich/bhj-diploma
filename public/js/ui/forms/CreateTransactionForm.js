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

  registerEvents() {
    let incomeButton = document.querySelector(".create-income-button")
    let expenseButton = document.querySelector(".create-expense-button")

    incomeButton.onclick = () => {
      App.getModal("newIncome").open()
    }

    expenseButton.onclick = () => {
      App.getModal("newExpense").open()
    }
  }
    /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    Account.list(null, (err, response) => {
      if(response && response.data) {
        console.log(response.data)
        let select = document.querySelector(".accounts-select")
        select.innerHTML = ""
        response.data.forEach(account => {
          select.innerHTML += `<option value="${account.id}">${account.name}</option>`
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

  }
}