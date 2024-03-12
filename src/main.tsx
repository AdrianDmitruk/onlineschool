import "@mantine/core/styles.css"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"

import "./index.css"

import { MantineProvider } from "@mantine/core"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MantineProvider defaultColorScheme='dark'>
			<BrowserRouter basename='/onlineschool/'>
				<App />
			</BrowserRouter>
		</MantineProvider>
	</React.StrictMode>
)
