import {
	redirect,
	Route,
	Router,
	type RouteSectionProps,
} from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js/web";

import "~/styles/tailwind.css";

const Redirect = (props: RouteSectionProps<{ href: string | URL }>) => (
	<>{redirect(props.data.href.toString())}</>
);

export default function App() {
	return (
		<Router root={(props) => <Suspense>{props.children}</Suspense>}>
			<Route
				component={Redirect}
				info={{ href: "ttg.xtreat.dev" }}
				path={"/ttg"}
			/>
			<FileRoutes />
		</Router>
	);
}
