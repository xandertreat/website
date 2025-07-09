import { Route } from '@solidjs/router';
import { type Component, mergeProps } from 'solid-js';

export default function Redirect(passed: {
	to: string | URL;
	path?: string;
	relative?: boolean;
}) {
	const props = mergeProps(
		{
			path: '',
		},
		passed,
	);

	if (props.relative)
		return (
			<Route
				component={() => {
					console.log('HI');
					window.location.assign(
						`${window.location.origin}/${String(props.to)}`,
					);
					return <></>;
				}}
				path={props.path}
			/>
		);

	return (
		<Route
			component={(() => window.location.assign(String(props.to))) as Component}
			path={props.path}
		/>
	);
}
