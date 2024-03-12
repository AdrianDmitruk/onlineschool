import { Route, Routes } from "react-router-dom"
import { Layout } from "./components"
import { MainPage } from "./page"
import { Test } from "./page/test"

function App() {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<MainPage />} />
					<Route path='/test' element={<Test />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
