import { formatNumber } from '@utils/formatNumbers'
import styles from './Input.module.scss'
import classnames from 'classnames'
import { getPercentages } from '@utils/getPercentages'

function Input({ label, initialValue, variant, handleChange, price }) {
	return (
		<label className={styles.input}>
			<p className={styles.input__label}>{label}</p>
			<div className={styles.input__fields}>
				<span className={styles.input__wrapper}>
					<input
						value={formatNumber(initialValue)}
						onChange={e => handleChange(e.target.value)}
						type='text'
						className={classnames(styles.input__field, styles.input__number)}
					/>
					<p
						className={classnames(styles.input__suffix, {
							[styles.input__suffix_fee]: variant == 'fee',
						})}
					>
						{variant == 'price'
							? '₽'
							: variant == 'fee'
							? `${getPercentages(price, initialValue)}`
							: 'мес.'}
					</p>
				</span>
				<input
					type='range'
					min={
						variant == 'price' ? 1500000 : variant == 'month' ? 6 : price * 0.1
					}
					max={
						variant == 'price'
							? 10000000
							: variant == 'month'
							? 120
							: price * 0.6
					}
					value={initialValue}
					onChange={e => handleChange(e.target.value)}
					className={classnames(styles.input__field, styles.input__range)}
				/>
			</div>
		</label>
	)
}

export default Input
