import { FC } from "react"

import { Outlet } from "react-router-dom"
import { Footer } from "../footer"
import { Header } from "../header"

import { Container } from "@mantine/core"
import classes from "./layout.module.css"

export const Layout: FC = () => {
	return (
		<div className={classes.wrap}>
			<Header />
			<Container size='md' className={classes.main}>
				<Outlet />
			</Container>
			<Footer />
		</div>
	)
}
