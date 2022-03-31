class ResultsView {
  _parentElement = document.querySelector(".result");

  addContent(items) {
    this._parentElement.innerHTML = "";
    let content = "Results";
    items.map((item, index) => {
      content += `<p class="resultItem">${index + 1}. ${item.name}</p>`;
    });
    this._parentElement.innerHTML = content;
  }
}

export default new ResultsView();
