const Finance = require('financejs');
let f = new Finance;

//Testing MP
test('MP : paying off $100000 at 3.92% for 30 years each month', () => {
  expect(f.MP(100000, .0392, 30, 12)).toBe(472.81);
});

test('MP : paying off $123456 at 7.92% for 15 years each month', () => {
  expect(f.MP(123456, .0792, 15, 12)).toBe(1174.12);
});

//Testing SI
test('SI : $1000 at 9% per year for 30 years', () => {
  expect(f.SI(1000, .09, 30)).toBe(2700.00);
});

test('SI : $2025 at 13% per year for 25 years', () => {
  expect(f.SI(2025, .13, 25)).toBe(6581.25);
});

//Testing CI
test('CI : $100000 compounding at 3.92% for 30 years', () => {
  expect(f.CI(100000, .0392, 30, 1)).toBe(316937.88);
});

test('CI : $50000 compounding at 13.92% for 15 years', () => {
  expect(f.CI(50000, .1392, 15, 1)).toBe(353158.49);
});

// Testing ATS
test('ATS : Total Assets of $1100 and Total Sales of $500', () => {
  expect(f.ATS(1100, 500)).toBe(2.2);
});

test('ATS : Total Assets of $500 and Total Sales of $1600', () => {
  expect(f.ATS(500, 1600)).toBe(0.31);
});

// Testing CF
test('CF : Income of $60 and Expenses of $110', () => {
  expect(f.CF([10, 20, 30], [10, 20, 30, 50])).toBe(-50.00);
});

test('CF : Income of $75600 and Expenses of $26000', () => {
  expect(f.CF(75600, 26000)).toBe(49600.00);
});

// Testing PVOA
test('PVOA : A payment $500 per month at (9% annually) .75% per month for 36 months', () => {
  expect(f.PVOA(500, .0075, 36)).toBe(15723.40);
});

test('PVOA : A payment $50000 per year at 5% a year for 10 years', () => {
  expect(f.PVOA(50000, .05, 10)).toBe(386086.75);
});

// Testing FVOA
test('FVOA : A payment $500 per month at (9% annually) .75% per month after 36 months', () => {
  expect(f.FVOA(500, .0075, 36)).toBe(20576.36);
});

test('FVOA : A payment $50000 per year at 5% a year after 10 years', () => {
  expect(f.FVOA(50000, .05, 10)).toBe(628894.63);
});

// Testing CAGR
test('CAGR : A beginning value of $10000 and ending value of $19500 after 3 years', () => {
  expect(f.CAGR(10000, 19500, 3)).toBe(0.24933297746139083);
});

test('CAGR : A beginning value of $20000 and ending value of $145000 after 6 years', () => {
  expect(f.CAGR(20000, 145000, 6)).toBe(0.3912003163865003);
});

// Testing
// test(' : ', () => {
//   expect(f.).toBe();
// });
//
// test(' : ', () => {
//   expect(f.).toBe();
// });
