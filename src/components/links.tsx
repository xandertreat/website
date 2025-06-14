import { A } from "@solidjs/router";
import type { JSX } from "solid-js";
import links from "~/data/links";
import NpmIcon from "~icons/devicon/npm";
import GitHubIcon from "~icons/fa/github-square";
import LinkedInIcon from "~icons/fa/linkedin-square";

export default function Links(props: { class?: string }) {
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
				class={`tooltip tooltip-info motion-blur-in-xs motion-opacity-in-0 motion-duration-500 motion-preset-slide-down motion-ease-in-out group *:group-hover:-translate-y-0.25 relative isolate z-50 size-7 select-none transition-[filter] hd:*:grayscale *:transition-[translate,filter] *:duration-200 hd:*:group-hover:grayscale-0 ${delays[props.delay ?? 0]}`}
				data-tip={props.tip}
				draggable={false}
				href={String(props.to)}
				target="_blank"
			>
				{props.children}
			</A>
		);
	}
	return (
		<span
			class={`inline-flex items-center justify-between gap-2.5 ${props.class}`}
		>
			<Link delay={1000} tip="GitHub" to={links.github}>
				<GitHubIcon class="size-full hd:system:text-info text-purple-700 dark:text-purple-500" />
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
