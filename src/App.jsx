import Layout from '@components/Layout/Layout'
import Heading from '@components/Heading/Heading'
import Form from '@components/Form/Form'

function App() {
	return (
		<Layout>
			<Heading text={'Рассчитайте стоимость автомобиля в лизинг'} />
      <Form />
		</Layout>
	)
}

export default App
