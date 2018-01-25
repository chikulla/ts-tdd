export default class Dollar {
  constructor(private amount: number) {}

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  equals(obj: any): boolean {
    const dollar = <Dollar>obj;
    return dollar.amount === this.amount;
  }
}
