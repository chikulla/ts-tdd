import Aho from "./aho";

describe('Aho', () => {
  it('plus() returns 4 if 1, 3 specified.', () => {
    expect(new Aho().plus(1,3)).toBe(4);
  });
});
