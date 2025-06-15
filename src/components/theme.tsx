import {
	type Component,
	type JSX,
	Match,
	Switch,
	createEffect,
	createSignal,
	onMount,
} from "solid-js";
import IconThemeLightDark from "~icons/mdi/theme-light-dark";
import IconMoonFilled from "~icons/tabler/moon-filled";
import IconSunFilled from "~icons/tabler/sun-filled";

type AppTheme = "system" | "light" | "dark";
export const DEFAULT_APP_THEME: AppTheme = "system";
export const PERSISTENCE_OPTIONS = {
	name: "theme",
};

const APP_THEME_TRANSITION_DURATION = 200;
const APP_THEME_TRANSITION_STYLES = `
  *,
::before,
::after {
    transition:
      color ${APP_THEME_TRANSITION_DURATION}ms ease-in-out,
      background-color ${APP_THEME_TRANSITION_DURATION}ms ease-in-out,
      border-color ${APP_THEME_TRANSITION_DURATION}ms ease-in-out,
      outline-color ${APP_THEME_TRANSITION_DURATION}ms ease-in-out,
      text-decoration-color ${APP_THEME_TRANSITION_DURATION}ms ease-in-out,
      fill ${APP_THEME_TRANSITION_DURATION}ms ease-in-out,
      stroke ${APP_THEME_TRANSITION_DURATION}ms ease-in-out,
      --tw-gradient-from ${APP_THEME_TRANSITION_DURATION}ms ease-in-out,
      --tw-gradient-via ${APP_THEME_TRANSITION_DURATION}ms ease-in-out,
      --tw-gradient-to ${APP_THEME_TRANSITION_DURATION}ms ease-in-out !important;
}
`;

const cycle = ["system", "light", "dark"] as const;

const AppThemeSwitcher: Component<
	JSX.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
	const [appTheme, setAppTheme] = createSignal<AppTheme>(DEFAULT_APP_THEME);

	onMount(() => {
		const stored = localStorage.getItem(PERSISTENCE_OPTIONS.name);
		if (stored) setAppTheme(stored as AppTheme);

		createEffect(() =>
			localStorage.setItem(PERSISTENCE_OPTIONS.name, appTheme()),
		);
	});

	let transitioningTheme = false;
	createEffect(() => {
		if (transitioningTheme) {
			document.documentElement.dataset.theme = appTheme();
			return;
		}

		try {
			transitioningTheme = true;
			const style = document.createElement("style");
			style.textContent = APP_THEME_TRANSITION_STYLES;

			document.head.appendChild(style);
			document.documentElement.dataset.theme = appTheme();

			setTimeout(() => style.remove(), APP_THEME_TRANSITION_DURATION);
		} catch (error) {
			console.error("Failed to change theme:", error);
			document.documentElement.dataset.theme = appTheme();
		} finally {
			transitioningTheme = false;
		}
	});

	return (
		<button
			{...props}
			aria-label={`Switch theme (current: ${appTheme()})`}
			data-tip={appTheme()[0].toLocaleUpperCase() + appTheme().slice(1)}
			onClick={() =>
				setAppTheme(cycle[(cycle.indexOf(appTheme()) + 1) % cycle.length])
			}
			type="button"
		>
			<Switch>
				<Match when={appTheme() === "system"}>
					<IconThemeLightDark class="motion-duration-200 motion-rotate-in-[-135deg] motion-opacity-in-0 motion-ease-in-out size-full" />
				</Match>
				<Match when={appTheme() === "light"}>
					<IconSunFilled class="motion-duration-200 motion-rotate-in-[-135deg] motion-opacity-in-0 motion-ease-in-out size-full text-amber-400" />
				</Match>
				<Match when={appTheme() === "dark"}>
					<IconMoonFilled class="motion-duration-200 motion-rotate-in-[-135deg] motion-opacity-in-0 motion-ease-in-out size-full" />
				</Match>
			</Switch>
		</button>
	);
};

export default AppThemeSwitcher;
