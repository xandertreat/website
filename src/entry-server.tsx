// @refresh reload
import { StartServer, createHandler } from "@solidjs/start/server";
import { DEFAULT_APP_THEME, PERSISTENCE_OPTIONS } from "./components/theme";

export const LIVE_URL = "https://ttg.xtreat.dev";

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html data-theme={DEFAULT_APP_THEME} lang="en-US">
				<head>
					<meta charset="UTF-8" />
					<meta content="IE=edge" http-equiv="x-ua-compatible" />
					<meta
						content="width=device-width, viewport-fit=cover, initial-scale=1.0"
						name="viewport"
					/>
					<title>Textual Theme Generator</title>
					<meta
						content="Generate accessible, on‑brand color themes for Textualize Textual TUI in seconds. Preview live, tweak hues, and export ready‑to‑use Python code for your terminal apps."
						name="description"
					/>
					<meta
						content="textual, textualize, tui, terminal ui, theme generator, color palette, python, code export, accessibility"
						name="keywords"
					/>
					<link href={LIVE_URL} rel="canonical" />
					<meta content="Xander Treat" name="author" />
					<meta content="Textual Theme Generator" name="application-name" />
					<meta content="#EEEEEE" name="theme-color" />
					<meta content="light dark" name="color-scheme" />
					<link href="/site.webmanifest" rel="manifest" />
					<meta content="#EEEEEE" name="msapplication-TileColor" />
					<meta content="/mstile-144x144.png" name="msapplication-TileImage" />
					<meta content="/browserconfig.xml" name="msapplication-config" />
					<meta content="yes" name="apple-mobile-web-app-capable" />
					<meta
						content="Textual Theme Generator"
						name="apple-mobile-web-app-title"
					/>
					<meta
						content="default"
						name="apple-mobile-web-app-status-bar-style"
					/>
					<meta content="website" property="og:type" />
					<meta content={LIVE_URL} property="og:url" />
					<meta content="Textual Theme Generator" property="og:title" />
					<meta
						content="Generate cohesive, accessible color palettes for Textual TUI and export Python theme code with one click."
						property="og:description"
					/>
					<meta content="/favicon.ico" property="og:image" />
					<meta content="Textual Theme Generator" property="og:site_name" />
					<meta
						content="index, follow, max-image-preview:large"
						name="robots"
					/>
					<meta content="strict-origin-when-cross-origin" name="referrer" />
					<meta content="telephone=no" name="format-detection" />
					{/* <link href="/favicon.svg" rel="icon" type="image/svg+xml" /> */}
					<link href="/favicon.ico" rel="icon" sizes="any" />
					<link
						href="/favicon-32x32.png"
						rel="icon"
						sizes="32x32"
						type="image/png"
					/>
					<link
						href="/favicon-96x96.png"
						rel="icon"
						sizes="96x96"
						type="image/png"
					/>
					<link
						href="/apple-touch-icon.png"
						rel="apple-touch-icon"
						sizes="180x180"
					/>
					<script
						innerText={`
						const theme = localStorage.getItem(${PERSISTENCE_OPTIONS.name});
						if(theme)
							document.documentElement.dataset.theme = theme;
						`}
					/>
					{assets}
				</head>
				<body>
					<div id="app">{children}</div>
					{scripts}
				</body>
			</html>
		)}
	/>
));
