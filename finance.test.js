const Finance = require('financejs');
let f = new Finance;

//Testing MP
test('MP : paying off $100,000 at 3.92% for 30 years each month', () => {
  expect(f.MP(100000, .0392, 30, 12)).toBe(472.81);
});

test('MP : paying off $123,456 at 7.92% for 15 years each month', () => {
  expect(f.MP(123456, .0792, 15, 12)).toBe(1174.12);
});

//Testing SI
test('SI : $1,000 at 9% per year for 30 years', () => {
  expect(f.SI(1000, .09, 30)).toBe(2700.00);
});

test('SI : $2,025 at 13% per year for 25 years', () => {
  expect(f.SI(2025, .13, 25)).toBe(6581.25);
});

//Testing CI
test('CI : $100,000 compounding at 3.92% for 30 years', () => {
  expect(f.CI(100000, .0392, 30, 1)).toBe(316937.88);
});

test('CI : $50,000 compounding at 13.92% for 15 years', () => {
  expect(f.CI(50000, .1392, 15, 1)).toBe(353158.49);
});

// Testing ATS
test('ATS : Total Assets of $1,100 and Total Sales of $500', () => {
  expect(f.ATS(1100, 500)).toBe(2.2);
});

test('ATS : Total Assets of $500 and Total Sales of $1,600', () => {
  expect(f.ATS(500, 1600)).toBe(0.31);
});

// Testing CF
test('CF : Income of $60 and Expenses of $110', () => {
  expect(f.CF([10, 20, 30], [10, 20, 30, 50])).toBe(-50.00);
});

test('CF : Income of $75,600 and Expenses of $26,000', () => {
  expect(f.CF(75600, 26000)).toBe(49600.00);
});

// Testing PVOA
test('PVOA : A payment $500 per month at (9% annually) .75% per month for 36 months', () => {
  expect(f.PVOA(500, .0075, 36)).toBe(15723.40);
});

test('PVOA : A payment $50,000 per year at 5% a year for 10 years', () => {
  expect(f.PVOA(50000, .05, 10)).toBe(386086.75);
});

// Testing FVOA
test('FVOA : A payment $500 per month at (9% annually) .75% per month after 36 months', () => {
  expect(f.FVOA(500, .0075, 36)).toBe(20576.36);
});

test('FVOA : A payment $50,000 per year at 5% a year after 10 years', () => {
  expect(f.FVOA(50000, .05, 10)).toBe(628894.63);
});

// Testing CAGR
test('CAGR : A beginning value of $10,000 and ending value of $19,500 after 3 years', () => {
  expect(f.CAGR(10000, 19500, 3)).toBe(0.24933297746139083);
});

test('CAGR : A beginning value of $20,000 and ending value of $145,000 after 6 years', () => {
  expect(f.CAGR(20000, 145000, 6)).toBe(0.3912003163865003);
});

// Testing LR
test('LR : Total liabilities of $600,000 and total equity of $1.2 million', () => {
  expect(f.LR([100000, 500000], 0, 1200000)).toBe(.5);
});

test('LR : Total liabilities of $25,000 and total assets of $100,000', () => {
  expect(f.LR(25000, 0, 100000)).toBe(.25);
});

// Testing R72
test('R72 : Rate of 2%', () => {
  expect(f.R72(2)).toBe(36);
});

test('R72 : Rate of 25%', () => {
  expect(f.R72(25)).toBe(2.88);
});

// Testing ERP
test('ERP : Expected returns for 2%, 5%, 3% with weights of 15%, 10%, -5%', () => {
  expect(f.ERP([.2, .5, .3], [.15, .1, -.05])).toBe(.065);
});

test('ERP : Expected returns for 2%, 5%, 3% with weights of 15%, 10%, 20%', () => {
  expect(f.ERP([.2, .5, .3], [.15, .1, .2])).toBe(.14);
});

// Testing CCE
test('CCE : Balance of $5,000 with a monthly payment at $100 at 11% APR', () => {
  expect(f.CCE(5000, 100, .11)).toBe(66.94907715792962);
});

test('CCE : Balance of $3,600 with a monthly payment at $216 at 14% APR', () => {
  expect(f.CCE(3600, 216, .14)).toBe(18.622683232923066);
});

// Testing APY
test('APY : Annual rate of 6% (.5% monthly) for 12 months', () => {
  expect(f.APY(.06, 12)).toBe(.06167781186449761);
});

test('APY : Annual rate of 10% (.0274% monthly) for 365 days', () => {
  expect(f.APY(.1, 365)).toBe(0.10515578161622718);
});

// Testing ROA
test('ROA : Net income of $10,000,000 and average assets of $15,000,000', () => {
  expect(f.ROA(10000000, 15000000)).toBe(0.6666666666666666);
});

test('ROA : Net income of $50,000,000 and average assets of $500,000,000', () => {
  expect(f.ROA(50000000, 500000000)).toBe(0.1);
});

// Testing
// test(' : ', () => {
//   expect(f.).toBe();
// });
//
// test(' : ', () => {
//   expect(f.).toBe();
// });
