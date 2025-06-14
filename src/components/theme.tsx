import { cookieStorage, makePersisted } from "@solid-primitives/storage";
import {
	type Component,
	type JSX,
	Match,
	Show,
	Switch,
	createEffect,
	createMemo,
	createSignal,
} from "solid-js";
import IconThemeLightDark from "~icons/mdi/theme-light-dark";
import IconMoonFilled from "~icons/tabler/moon-filled";
import IconSunFilled from "~icons/tabler/sun-filled";

type AppTheme = "system" | "light" | "dark";
export const DEFAULT_APP_THEME: AppTheme = "system";
const PERSISTENCE_OPTIONS = {
	name: "theme",
	storage: cookieStorage,
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

// TODO: fix weird bug where starting theme icon disappears? (sometimes) and it is always set to system icon? (context / storage off)
const AppThemeSwitcher: Component<
	JSX.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
	let transitioningTheme = false;
	const [appTheme, setAppTheme] = makePersisted(
		createSignal<AppTheme>(DEFAULT_APP_THEME),
		PERSISTENCE_OPTIONS,
	);

	createEffect(async () => {
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

			await new Promise((resolve) =>
				setTimeout(resolve, APP_THEME_TRANSITION_DURATION),
			);
			style.remove();
		} catch (error) {
			console.error("Failed to change theme:", error);
			document.documentElement.dataset.theme = appTheme();
		} finally {
			transitioningTheme = false;
		}
	});

	const cycle = ["system", "light", "dark"] as const;
	const nextThemeIdx = createMemo(() => {
		const current = cycle.indexOf(appTheme());
		return (current + 1) % cycle.length;
	});

	return (
		<button
			{...props}
			aria-label={`Switch theme (current: ${appTheme() || "system"})`}
			data-tip={appTheme()[0].toLocaleUpperCase() + appTheme().slice(1)}
			onClick={() => setAppTheme(cycle[nextThemeIdx()])}
			type="button"
		>
			<Show
				fallback={
					<IconThemeLightDark class="motion-duration-200 motion-rotate-in-[-135deg] motion-opacity-in-0 motion-ease-in-out size-full" />
				}
				when={appTheme()}
			>
				{(theme) => (
					<Switch
						fallback={
							<IconThemeLightDark class="motion-duration-200 motion-rotate-in-[-135deg] motion-opacity-in-0 motion-ease-in-out size-full" />
						}
					>
						<Match when={theme() === "system"}>
							<IconThemeLightDark class="motion-duration-200 motion-rotate-in-[-135deg] motion-opacity-in-0 motion-ease-in-out size-full" />
						</Match>
						<Match when={theme() === "light"}>
							<IconSunFilled class="motion-duration-200 motion-rotate-in-[-135deg] motion-opacity-in-0 motion-ease-in-out size-full text-amber-400" />
						</Match>
						<Match when={theme() === "dark"}>
							<IconMoonFilled class="motion-duration-200 motion-rotate-in-[-135deg] motion-opacity-in-0 motion-ease-in-out size-full" />
						</Match>
					</Switch>
				)}
			</Show>
		</button>
	);
};

export default AppThemeSwitcher;
