it('should calculate the monthly rate correctly', function () {
  let values = {
    amount: 10000,
    years: 10,
    rate: 5
  }
  expect(calculateMonthlyPayment(values)).toEqual('106.07')
})


it('should return a result with 2 decimal places', function() {
  let values = {
    amount: 10000,
    years: 10,
    rate: 5
  }
  expect(calculateMonthlyPayment(values)).toEqual('106.07');
})

it('should handle high interest rates', function() {
  let values = {
    amount: 1000,
    years: 50,
    rate: 99
  }
  expect(calculateMonthlyPayment(values)).toEqual('82.50');
})