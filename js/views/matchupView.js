class MatchupView {
  _parentElement = document.querySelector(".matchup");
  _buttonA = document.querySelector("#buttonA");
  _buttonB = document.querySelector("#buttonB");

  addHandlerButtons(handler) {
    this._buttonA.addEventListener("click", function (e) {
      handler(e);
    });
    this._buttonB.addEventListener("click", function (e) {
      handler(e);
    });
  }

  changeButtonLabels(labelA, labelB) {
    this._buttonA.innerText = labelA;
    this._buttonB.innerText = labelB;
  }
}

export default new MatchupView();
