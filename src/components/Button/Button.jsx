import styles from './Button.module.scss'
import classnames from 'classnames'

function Button({ children }) {
	return <button className={classnames(styles.button)}>{children}</button>
}

export default Button
