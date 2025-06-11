import { Route, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import type { Component } from "solid-js";
import { Suspense, isServer } from "solid-js/web";

// Styles
import "~/styles/tailwind.css";

// Routing
const Redirect = (props: { to: string | URL; path: string }) => (
	<Route
		component={
			(() =>
				!isServer && window.location.assign(props.to.toString())) as Component
		}
		path={props.path}
	/>
);

export default function App() {
	return (
		<Router root={(props) => <Suspense>{props.children}</Suspense>}>
			{/* Redirects */}
			<Redirect path="ttg" to="https://ttg.xtreat.dev" />
			{/* Routes */}
			<FileRoutes />
		</Router>
	);
}
