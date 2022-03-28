/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if (!element) {
      throw new Error("Элемент не может быть пустым");
    }
    this.element = element;
    this.registerEvents()
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
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
}
