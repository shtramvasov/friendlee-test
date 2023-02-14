export const countTotal = (fee, month, totalMonthly) =>
	Math.ceil(fee + month * totalMonthly)
