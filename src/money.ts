export default class Money {
  protected amount: number;

  equals(obj: any): boolean {
    const money: Money = <Money>obj;
    return money.amount === this.amount &&
      this.constructor.toString() === money.constructor.toString();
  }
}
