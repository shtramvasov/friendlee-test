import styles from './Layout.module.scss'

function Layout({ children }) {
	return <main className={styles.layout}>{children}</main>
}

export default Layout
