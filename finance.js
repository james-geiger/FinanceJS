function Finance() {

  //Monthly Payment (MP)
  // p = Principle
  // r = Rate of Interest
  // t = Number of Periods
  // n = Number of Payments per Period
  this.MP = function(p, r, t, n){
    return parseFloat((((p*r)/n)/(1 - Math.pow(((r/n)+1) , (-n*t)))).toFixed(2));
  }

  // Simple Interest (SI)
  // p = Principle
  // r = Rate of Interest
  // t = Number of Periods
  this.SI = function(p, r, t){
    return parseFloat((p * r * t).toFixed(2));
  }

  // Compound Interest (CI)
  // p = Principle
  // r = Rate of Interest
  // t = Number of Periods
  // n = Number of Compoundings per Period
  this.CI = function(p, r, t, n){
    return parseFloat((p * Math.pow((1+(r/n)),(n*t))).toFixed(2));
  }

  // Assets to Sales (ATS)
  // assets can either by an single number or an array of numbers
  // sales can either by an single number or an array of numbers
  this.ATS = function(tA, tS){
    var assets = 0, sales = 0;
    if(Array.isArray(tA)){
      for(var i = 0; i < tA.length; i++) {
        assets = assets + tA[i];
      }
    } else {
      assets = assets + tA;
    }
    if(Array.isArray(tS)){
      for(var i = 0; i < tS.length; i++) {
        sales = sales + tS[i];
      }
    } else {
      sales = sales + tS;
    }
    return parseFloat((assets/sales).toFixed(2));
  }

  // Cash Flow (CF)
  // income can either by an single number or an array of numbers
  // expenses can either by an single number or an array of numbers
  this.CF = function(income, expenses){
    var total = 0;
    if(Array.isArray(income)){
      for(var i = 0; i < income.length; i++) {
        total = total + income[i];
      }
    } else {
      total = total + income;
    }
    if(Array.isArray(expenses)){
      for(var e = 0; e < expenses.length; e++) {
        total = total - expenses[e];
      }
    } else {
      total = total - expenses;
    }
    return parseFloat(total.toFixed(2));
  }

  // Present Value of an Ordinary Annuity (PVOA)
  // pmt = payment
  // r = rate
  // t = number of periods
  this.PVOA = function(pmt, r, t){
    return parseFloat((pmt*((1/r)-(1/(r*Math.pow((1+r),(t)))))).toFixed(2));
  }

  // Future Value of an Ordinary Annuity (FVOA)
  // pmt = payment
  // r = rate
  // t = number of periods
  this.FVOA = function(pmt, r, t){
    return parseFloat(( pmt * ( ((Math.pow((1+r),(t)))/(r)) - ((1)/(r)) ) ).toFixed(2));
  }

  // Compound Annual Growth Rate (CAGR)
  // bV = beginning value
  // eV = ending value
  // t = number of periods
  this.CAGR = function(bV, eV, t){
    return parseFloat(((Math.pow((eV/bV),(1/t)) - 1).toFixed(2)));
  }

  // Leverage Ratio (LR)
  // tL = total liabilities
  // tD = total debts
  // tI = total income
  this.LR = function(tL, tD, tE){
    var liabilities = 0, debts = 0, equity = 0;
    if(Array.isArray(tL)){
      for(var i = 0; i < tL.length; i++) {
        liabilities = liabilities + tL[i];
      }
    } else {
      liabilities = liabilities + tL;
    }
    if(Array.isArray(tD)){
      for(var i = 0; i < tD.length; i++) {
        debts = debts + tD[i];
      }
    } else {
      debts = debts + tD;
    }
    if(Array.isArray(tE)){
      for(var i = 0; i < tI.length; i++) {
        equity = equity + tE[i];
      }
    } else {
      equity = equity + tE;
    }
    return parseFloat(((liabilities+debts)/equity).toFixed(2));
  }

  // Rule of 72 (R72)
  // r = rate
  this.R72 = function(r){
    return 72/r;
  }

  // Expected Return of a Portfolio
  // weights can either by an single number or an array of numbers
  // returns can either by an single number or an array of numbers
  this.ERP = function(weights, returns){
    var erp = 0;
    if(weights.length !== returns.length){throw new Error('Make sure that the weights and returns have same number of items...');}
    if(weights.length <= 0 || returns.length <= 0){throw new Error('Make sure that the weights and returns have more than zero items...');}
    for(var i = 0; i < weights.length; i++){
      erp = erp + (weights[i] * returns[i]);
    }
    return erp;
  }

  // Credit Card Equation (CCE)
  // b = balance
  // p = monthly payment
  // apr = APR
  this.CCE = function(b, p, apr){
    return parseFloat(((-1/30)*((Math.log(1+((b/p)*(1-Math.pow((1+(apr/365)),(30))))))/((Math.log(1+(apr/365)))))).toFixed(2));
  }

  // Annual Percentage Yield (APY)
  // r = rate
  // n = number of periods
  this.APY = function(r, n){
    return parseFloat((Math.pow((1 + (r/n)),(n)) - 1).toFixed(2));
  }

  // Return on Assets (ROA)
  // netIncome = net income
  // avgTA = average tangible assets
  this.ROA = function(netIncome, avgTA){
    return netIncome/avgTA;
  }

}

module.exports = Finance;
