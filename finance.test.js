const Finance = require('financejs');
let f = new Finance;

//Testing MP
test('MP : paying off $100000 at 3.92% for 30 years each month', () => {
  expect(f.MP(100000, .0392, 30, 12)).toBe(472.81);
});

//Testing SI
test('SI : $1000 at 9% per year for 30 years', () => {
  expect(f.SI(1000, .09, 30)).toBe(2700.00);
});

test('SI : $2025 at 13% per year for 25 years', () => {
  expect(f.SI(2025, .13, 25)).toBe(6581.25);
});
