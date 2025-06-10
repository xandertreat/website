import { A } from "@solidjs/router";
import NpmIcon from "~icons/mdi/npm";
import GitHubIcon from "~icons/mdi/github-box";
import LinkedInIcon from "~icons/mdi/linkedin";

import links from "~/data/links";
import type { JSX } from "solid-js";

export default function Links() {
	interface LinkProps {
		children: JSX.Element;
		delay?: number;
	}
	function Link({ children, delay = 0 }: LinkProps) {
		return (
			<A
				class={
					"motion-blur-in-xs motion-opacity-in-0 motion-duration-500 motion-translate-y-in-50 motion-ease-in-out group *:group-hover:-translate-y-0.5 size-7 transition-colors duration-200 *:transition-[translate] *:duration-200 hover:text-info"
				}
				href={links.github}
				target="_blank"
			>
				{children}
			</A>
		);
	}
	return (
		<span class="flex items-center justify-between gap-1">
			<Link>
				<GitHubIcon />
			</Link>
			<Link delay={100}>
				<NpmIcon />
			</Link>
			<Link delay={200}>
				<LinkedInIcon />
			</Link>
		</span>
	);
}
