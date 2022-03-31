import Item from "./Item.js";

export const state = {
  items: [],
  sortedItems: [],
  buttonAIndex: 0,
  buttonBIndex: 1,
};

export const changeButtonState = function () {
  console.log("start", state.buttonAIndex, state.buttonBIndex);

  if (state.buttonBIndex < state.items.length - 1) {
    state.buttonBIndex++;
  } else if (state.buttonBIndex === state.items.length - 1) {
    state.buttonBIndex = state.buttonAIndex + 2;
    state.buttonAIndex++;
  }

  console.log("end", state.buttonAIndex, state.buttonBIndex);
};

export const sortItems = function () {
  // sorts items according to score
  state.sortedItems = state.items.sort((a, b) => {
    return b.score - a.score;
  });
};
