import { Router } from '@solidjs/router';
import { clientOnly } from '@solidjs/start';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js/web';

// Styles
import '~/styles/tailwind.css';

const Redirect = clientOnly(() => import('~/components/client/redirect'));
export default function App() {
	return (
		<Router root={(props) => <Suspense>{props.children}</Suspense>}>
			{/* Routes */}
			<FileRoutes />
			{/* Redirects */}
			<Redirect path="ttg" to="https://ttg.xtreat.dev" />
		</Router>
	);
}
