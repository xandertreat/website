// @refresh reload
import { StartServer, createHandler } from '@solidjs/start/server';
import { DEFAULT_APP_THEME, PERSISTENCE_OPTIONS } from '~/components/theme';

//TODO: this
export const LIVE_URL = import.meta.env.PUBLIC_SITE_URL ?? 'https://xtreat.dev';

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html
				class="h-full scroll-smooth"
				data-theme={DEFAULT_APP_THEME}
				lang="en-US"
			>
				<head>
					<meta charset="utf-8" />
					<meta content="IE=edge" http-equiv="x-ua-compatible" />
					<meta
						content="width=device-width,initial-scale=1,viewport-fit=cover"
						name="viewport"
					/>
					{/* SEO */}
					<title>Xander Treat</title>
					<meta
						content="Portfolio & blog of software engineer Xander Treat - a recent ASU graduate and full stack developer. Projects, articles, and contact details in one place."
						name="description"
					/>
					<link href={LIVE_URL} rel="canonical" />

					<meta content="light dark" name="color-scheme" />
					<meta
						content="#FFFFFF"
						media="(prefers-color-scheme: light)"
						name="theme-color"
					/>
					<meta
						content="#000000"
						media="(prefers-color-scheme: dark)"
						name="theme-color"
					/>
					<link href="/site.webmanifest" rel="manifest" />

					{/* Social */}
					<meta content="website" property="og:type" />
					<meta content={LIVE_URL} property="og:url" />
					<meta content="Xander Treat" property="og:title" />
					<meta
						content="Portfolio & blog of software engineer Xander Treat - a recent ASU graduate and full stack developer. Projects, articles, and contact details in one place."
						property="og:description"
					/>
					<meta content={`${LIVE_URL}/og-cover.png`} property="og:image" />
					{/* Icons */}
					<link href="/favicon.ico" rel="icon" sizes="any" />
					<link
						href="/apple-touch-icon.png"
						rel="apple-touch-icon"
						sizes="180x180"
					/>
					<link
						href="/favicon-32x32.png"
						rel="icon"
						sizes="32x32"
						type="image/png"
					/>
					<link
						href="/favicon-16x16.png"
						rel="icon"
						sizes="16x16"
						type="image/png"
					/>
					<link href="/site.webmanifest" rel="manifest" />
					<script
						innerText={`try{const t=localStorage.getItem("${PERSISTENCE_OPTIONS.name}");if(t)document.documentElement.dataset.theme=t}catch{}`}
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
