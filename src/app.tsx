import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { NoHydration } from "solid-js/web";

import "~/styles/tailwind.css";

export default function App() {
	return (
		<Router root={(props) => <NoHydration>{props.children}</NoHydration>}>
			<FileRoutes />
		</Router>
	);
}
