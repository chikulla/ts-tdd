export default class Franc {
  constructor(private amount: number) {}

  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }

  equals(obj: any): boolean {
    const franc = <Franc>obj;
    return franc.amount === this.amount;
  }
}
