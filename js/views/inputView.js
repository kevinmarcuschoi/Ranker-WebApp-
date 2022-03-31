class InputView {
  _parentElement = document.querySelector(".itemList");

  init() {
    const numberBox = document.querySelector(".numberAddItemBox").value = 1;
  }

  addHandlerStartMatchup(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".submit");
      if (!btn) return;
      handler();
    });
  }

  addHandlerAddItem() {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".add");
      if (!btn) return;

      const itemBox = document.createElement("input");
      itemBox.className = "itemInput";
      itemBox.type = "textbox";
      const numberOfBoxes = document.querySelector(".numberAddItemBox").value

      for(let i = 1; i <= numberOfBoxes; i++) {
        const itemBox = document.createElement("input");
        itemBox.className = "itemInput";
        itemBox.type = "textbox";
        document.querySelector(".items").appendChild(itemBox);
      }

      document.querySelector(".numberAddItemBox").value = 1;
    });
  }
  
}

export default new InputView();
