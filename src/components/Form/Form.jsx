import { useEffect, useState } from 'react'
import Input from '@components/Input/Input'
import Button from '@components/Button/Button'
import { formatNumber } from '@utils/formatNumbers'
import { countTotal } from '@utils/countTotal'
import { countTotalMonthly } from '@utils/countTotalMonthly'
import styles from './Form.module.scss'

function Form() {
	const [data, setData] = useState({
		price: 3300000,
		fee: 420000,
		month: 60,
		total: 4467313,
		totalMonthly: 114455,
	})

	useEffect(() => {
		setData(prev => ({
			...prev,
			totalMonthly: countTotalMonthly(data.price, data.fee, data.month),
			total: countTotal(data.fee, data.month, data.totalMonthly),
		}))
	}, [data.price, data.fee, data.month, data.totalMonthly])

	return (
		<form className={styles.form}>
			<fieldset className={styles.form__fieldset}>
				<Input
					label='Стоимость автомобиля'
					initialValue={data.price}
					handleChange={newValue =>
						setData(prev => ({ ...prev, price: newValue }))
					}
					variant='price'
				/>
				<Input
					label='Первоначальный взнос'
					initialValue={data.fee}
					price={data.price}
					handleChange={newValue =>
						setData(prev => ({ ...prev, fee: newValue }))
					}
					variant='fee'
				/>
				<Input
					label='Срок лизинга'
					initialValue={data.month}
					handleChange={newValue =>
						setData(prev => ({ ...prev, month: newValue }))
					}
					variant='month'
				/>
			</fieldset>
			<footer className={styles.form__footer}>
				<div>
					<p>Сумма договора лизинга</p>
					<p className='text--large'>{formatNumber(data.total)} ₽</p>
				</div>
				<div>
					<p>Ежемесячный платеж от</p>
					<p className='text--large'>{formatNumber(data.totalMonthly)} ₽</p>
				</div>
				<Button>Оставить заявку</Button>
			</footer>
		</form>
	)
}

export default Form
