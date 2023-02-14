import styles from './Button.module.scss'
import classnames from 'classnames'

function Button({ children, disabled = false }) {
	return (
		<button disabled={disabled} className={classnames(styles.button)}>
			{children}
		</button>
	)
}

export default Button
