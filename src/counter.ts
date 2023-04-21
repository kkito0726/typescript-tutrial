export default class Counter {
  count: number;

  constructor(count: number) {
    this.count = count;
  }

  public setCount(elem: HTMLElement | null) {
    if (elem) {
      elem.innerHTML = this.count.toString();
    }
  }

  public handleAdd() {
    this.count += 1;
    console.log(this.count);
  }

  public handleSubtract() {
    this.count -= 1;
  }
}
