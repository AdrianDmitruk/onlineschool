import { Burger, Button, Center, Container, Group, Menu } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronDown } from "@tabler/icons-react"

import { FC } from "react"
import { Link } from "react-router-dom"
import classes from "./header.module.css"

import { IconCode } from "@tabler/icons-react"
import { SwitchColor } from "../switch-color"
const links = [
	{ link: "/test", label: "Features" },
	{
		link: "#1",
		label: "Learn",
		links: [
			{ link: "/docs", label: "Documentation" },
			{ link: "/resources", label: "Resources" },
			{ link: "/community", label: "Community" },
			{ link: "/blog", label: "Blog" },
		],
	},
	{ link: "/about", label: "About" },
	{ link: "/pricing", label: "Pricing" },
	{
		link: "#2",
		label: "Support",
		links: [
			{ link: "/faq", label: "FAQ" },
			{ link: "/demo", label: "Book a demo" },
			{ link: "/forums", label: "Forums" },
		],
	},
]

export const Header: FC = () => {
	const [opened, { toggle }] = useDisclosure(false)

	const items = links.map(link => {
		const menuItems = link.links?.map(item => (
			<Menu.Item key={item.link}>{item.label}</Menu.Item>
		))

		if (menuItems) {
			return (
				<Menu
					key={link.label}
					trigger='hover'
					transitionProps={{ exitDuration: 0 }}
					withinPortal
				>
					<Menu.Target>
						<a
							href={link.link}
							className={classes.link}
							onClick={event => event.preventDefault()}
						>
							<Center>
								<span className={classes.linkLabel}>{link.label}</span>
								<IconChevronDown size='0.9rem' stroke={1.5} />
							</Center>
						</a>
					</Menu.Target>
					<Menu.Dropdown>{menuItems}</Menu.Dropdown>
				</Menu>
			)
		}
		return (
			<Link key={link.label} to={link.link} className={classes.link}>
				{link.label}
			</Link>
		)
	})

	return (
		<header className={classes.header}>
			<Container size='md'>
				<div className={classes.inner}>
					<Link to={"/"} className={classes.logo}>
						<IconCode stroke={2} />
					</Link>

					<Group gap={10} visibleFrom='sm'>
						{items}
						<Group gap={10} visibleFrom='sm'>
							<Button variant='default'>Log in</Button>
							<Button>Sign up</Button>
						</Group>
						<SwitchColor />
					</Group>

					<Burger opened={opened} onClick={toggle} size='sm' hiddenFrom='sm' />
				</div>
			</Container>
		</header>
	)
}
