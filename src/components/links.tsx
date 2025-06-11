import { A } from "@solidjs/router";
import type { JSX } from "solid-js";
import links from "~/data/links";
import NpmIcon from "~icons/devicon/npm";
import GitHubIcon from "~icons/fa/github-square";
import LinkedInIcon from "~icons/fa/linkedin-square";

export default function Links() {
	interface LinkProps {
		to: string | URL;
		tip?: string;
		delay?: number;
		children?: JSX.Element;
	}
	function Link(props: LinkProps) {
		const delays: Record<number, string> = {
			0: "",
			1000: "motion-delay-1000",
			1100: "motion-delay-1100",
			1200: "motion-delay-1200",
		};

		return (
			<A
				class={`tooltip-info motion-blur-in-xs motion-opacity-in-0 motion-duration-500 motion-translate-y-in-50 motion-ease-in-out group *:group-hover:-translate-y-0.5 relative size-7 select-none transition-[filter] *:grayscale *:transition-[translate,filter] *:duration-200 *:group-hover:grayscale-0 ${delays[props.delay ?? 0]}`}
				draggable={false}
				href={String(props.to)}
				target="_blank"
			>
				<span class="motion-duration-75 motion-ease-in-out group-hover:motion-scale-in motion-scale-out-50 motion-opacity-out-0 group-hover:motion-opacity-in-50 -translate-x-1/2 -bottom-[125%] absolute left-1/2 rounded-full border-2 border-neutral bg-accent px-2 pb-0.5 text-center text-accent-content">
					{props.tip}
				</span>
				{props.children}
			</A>
		);
	}
	return (
		<span class="inline-flex items-center justify-between gap-2.5">
			<Link delay={1000} tip="GitHub" to={links.github}>
				<GitHubIcon class="size-full system:text-info text-purple-700 dark:text-purple-500" />
			</Link>
			<Link delay={1100} tip="npm" to={links.npm}>
				<NpmIcon />
			</Link>
			<Link delay={1200} tip="LinkedIn" to={links.linkedin}>
				<LinkedInIcon class="size-full text-sky-600" />
			</Link>
		</span>
	);
}
