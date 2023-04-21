import SaySomething from "./saySomething";
import Counter from "./counter";

const root: HTMLElement | null = document.getElementById("root");

const saySomething = new SaySomething("Hello Typescript");
saySomething.sayText(root);

const counter = new Counter(0);
const count = document.getElementById("count");

const addButton: HTMLElement | null = document.getElementById("add");
addButton?.addEventListener("click", () => {
  counter.handleAdd();
  counter.setCount(count);
});

const subtractButton: HTMLElement | null = document.getElementById("subtract");
subtractButton?.addEventListener("click", () => {
  counter.handleSubtract();
  counter.setCount(count);
});
