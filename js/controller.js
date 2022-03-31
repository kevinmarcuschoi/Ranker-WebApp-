import inputView from "./views/inputView.js";
import Item from "./Item.js";
import matchupView from "./views/matchupView.js";
import resultsView from "./views/resultsView.js";
import * as model from "./model.js";

const minimumListItem = 3;

const submit = document.querySelector(".submit");

const startMatchUp = function () {
  const inputs = document.querySelectorAll(".itemInput");
  const inputsArray = Array.prototype.slice.call(inputs);

  inputsArray.map((el) => {
    let name = el.value.trim();
    if (name < 1) return;
    const item = new Item(el.value);
    model.state.items.push(item);
  });

  if (model.state.items.length < minimumListItem) {
    alert("List needs 3 or more items");
    return;
  }

  matchupView.changeButtonLabels(
    model.state.items[model.state.buttonAIndex].name,
    model.state.items[model.state.buttonBIndex].name
  );

  document.querySelector(".matchup").classList.remove("hidden");
};

const itemSelected = function (e) {
  if (e.target.id === "buttonA") {
    model.state.items[model.state.buttonAIndex].addScore();
  }

  if (e.target.id === "buttonB") {
    model.state.items[model.state.buttonBIndex].addScore();
  }

  if (
    model.state.buttonAIndex === model.state.items.length - 2 &&
    model.state.buttonBIndex === model.state.items.length - 1
  ) {
    document.querySelector(".matchup").classList.add("hidden");
    document.querySelector(".result").classList.remove("hidden");
    model.sortItems();
    resultsView.addContent(model.state.sortedItems);
  } else {
    model.changeButtonState();

    matchupView.changeButtonLabels(
      model.state.items[model.state.buttonAIndex].name,
      model.state.items[model.state.buttonBIndex].name,
    );
  }
};

const init = function () {
  inputView.init();
  inputView.addHandlerStartMatchup(startMatchUp);
  inputView.addHandlerAddItem();
  matchupView.addHandlerButtons(itemSelected);
};

init();
