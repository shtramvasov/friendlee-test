export const countTotalMonthly = (price, fee, months) =>
	Math.ceil(
		(price - fee) *
			((0.05 * Math.pow(1 + 0.05, months)) / (Math.pow(1 + 0.05, months) - 1)),
	)
