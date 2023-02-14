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
			</fieldset>
			<footer className={styles.form__footer}></footer>
		</form>
	)
}

export default Form
