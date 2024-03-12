import {
	ActionIcon,
	useComputedColorScheme,
	useMantineColorScheme,
} from "@mantine/core"
import { IconMoon, IconSun } from "@tabler/icons-react"
import cx from "clsx"
import { FC } from "react"

import classes from "./switch-color.module.css"

export const SwitchColor: FC = () => {
	const { setColorScheme } = useMantineColorScheme()
	const computedColorScheme = useComputedColorScheme("light", {
		getInitialValueInEffect: true,
	})
	return (
		<ActionIcon
			onClick={() =>
				setColorScheme(computedColorScheme === "light" ? "dark" : "light")
			}
			variant='default'
			size='36'
			aria-label='Toggle color scheme'
		>
			<IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
			<IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
		</ActionIcon>
	)
}
