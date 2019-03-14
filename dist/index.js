export class C {
  constructor() {
    this.x = 10;

    this.getX = () => this.x;

    this.setX = newVal => {
      this.x = newVal;
    };
  }
}
export let x = new C();
export let y = { ...{
    some: "value"
  }
};