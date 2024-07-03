export function calculateInvestmentReturn(principal, rate, time, compoundingFrequency) {
    return principal * Math.pow((1 + rate / compoundingFrequency), compoundingFrequency * time);
}