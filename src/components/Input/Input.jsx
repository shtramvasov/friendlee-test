import { useState } from 'react'
import { formatNumber } from '@utils/formatNumbers'
import styles from './Input.module.scss'
import classnames from 'classnames'

function Input({ label, initialValue, variant }) {
	const [value, setValue] = useState(initialValue)
	return (
		<div className={styles.input}>
			<label>
				<p className={styles.input__label}>{label}</p>
				<div className={styles.input__fields}>
					<input
						value={formatNumber(value)}
						onChange={e => setValue(e.target.value)}
						type='text'
						className={classnames(styles.input__field, styles.input__number)}
					/>
					<input
						type='range'
						min={variant == 'price' ? 1500000 : variant == 'month' ? 6 : 10}
						max={variant == 'price' ? 10000000 : variant == 'month' ? 120 : 60}
						value={value}
						onChange={e => setValue(formatNumber(e.target.value))}
						className={classnames(styles.input__field, styles.input__range)}
					/>
				</div>
			</label>
		</div>
	)
}

export default Input
