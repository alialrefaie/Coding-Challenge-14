import { calculateInterest } from './interestRate';
import { calculateLoanPayment } from './loanPayment';
import { calculateInvestmentReturn } from './investmentReturn';

document.getElementById('interestCalcBtn').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    const interest = calculateInterest(principal, rate, time);
    document.getElementById('result').innerText = `Interest: ${interest}`;
});

document.getElementById('loanCalcBtn').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const n = parseFloat (document.getElementById('n').value);
    const payment = calculateLoanPayment(principal, rate, n);
    document.getElementById('result').innerText = `Monthly Payment: ${payment}`;
});

document.getElementById('investmentCalcBtn').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const timesCompounded = parseFloat(document.getElementById('timesCompounded').value);
    const time = parseFloat (document.getElementById('time').value);
    const futureValue = calculateInvestmentReturn(principal, rate, timesCompounded, time);
    document.getElementById('result').innerText = `Future Value: ${futureValue}`;
});

if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    alert('Please enter valid numbers for all fields.');
    return;
}