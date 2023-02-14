import Input from '@components/Input/Input'
import styles from './Form.module.scss'

function Form() {
	return (
		<form className={styles.form}>
			<fieldset className={styles.form__fieldset}>
				<Input
					label='Стоимость автомобиля'
					initialValue={3300000}
					variant='price'
				/>
				<Input
					label='Первоначальный взнос'
					initialValue={420000}
					variant='fee'
				/>
				<Input label='Срок лизинга' initialValue={60} variant='month' />
			</fieldset>
			<footer className={styles.form__footer}>
				<div className={styles.form__details}>
					<p>Сумма договора лизинга</p>
					<p className='text--large'>4 467 313 ₽</p>
				</div>
				<div className={styles.form__details}>
					<p>Ежемесячный платеж от</p>
					<p className='text--large'>114 455 ₽</p>
				</div>
        <button>Отправить</button>
			</footer>
		</form>
	)
}

export default Form
