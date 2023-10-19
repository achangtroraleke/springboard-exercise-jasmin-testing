
it('should calculate the monthly rate correctly', function () {
  // ...

  expect(calculateMonthlyPayment({
    amount:1000,
    years:3,
    rate:5    
  })).toEqual(29.97);
  
});


it("should return a result with 2 decimal places", function() {
  // ..
  expect(
      calculateMonthlyPayment({amount:1000, years:3, rate:5}).toString().split('.')[1].length).toEqual(2)
});

/// etc
