import {
	createPositionToElement,
	useMousePosition,
} from "@solid-primitives/mouse";
import { createEffect, createSignal, type JSX, Show } from "solid-js";
import type { Badges } from "~/data/projects";
import IconAstro from "~icons/devicon/astro";
import IconPython from "~icons/devicon/python";
import IconJSX from "~icons/devicon/react";
import IconSolid from "~icons/devicon/solidjs";
import IconTailwind from "~icons/devicon/tailwindcss";
import IconTS from "~icons/devicon/typescript";
import { useTabContext } from "./tabs";

interface ProjectProps {
	url?: string;
	delay?: number;
	title: string;
	badges?: Badges;
	description?: string;
	children?: JSX.Element;
}

export default function Project(props: ProjectProps) {
	const [shouldAnimate, setShouldAnimate] = createSignal(true);
	const { open } = useTabContext();
	createEffect((prev) => {
		const isOpen = open();
		if (!isOpen && prev) setShouldAnimate(false);
		return isOpen;
	});

	const delays: Record<number, string> = {
		0: "",
		200: "motion-delay-200",
		400: "motion-delay-400",
		600: "motion-delay-600",
		800: "motion-delay-800",
		1000: "motion-delay-1000",
		1200: "motion-delay-1200",
		1400: "motion-delay-1400",
		1600: "motion-delay-1600",
		1800: "motion-delay-1800",
		2000: "motion-delay-2000",
	};

	const badgeClass =
		"badge badge-xs py-2.5 badge-soft badge-outline inline-flex items-center gap-1";

	const Badges = () => (
		<Show when={props.badges}>
			<span class="inline-flex flex-wrap items-center gap-1">
				<Show when={props.badges?.typescript}>
					<span class={`${badgeClass} badge-info text-blue-700`}>
						<IconTS class="size-4" /> TypeScript
					</span>
				</Show>
				<Show when={props.badges?.astro}>
					<span class={`${badgeClass} badge-success text-purple-600`}>
						<IconAstro class="size-4" /> Astro
					</span>
				</Show>
				<Show when={props.badges?.solid}>
					<span class={`${badgeClass} badge-info text-blue-500`}>
						<IconSolid class="size-4" /> Solid
					</span>
				</Show>
				<Show when={props.badges?.jsx}>
					<span class={`${badgeClass} badge-info`}>
						<IconJSX class="size-4" /> JSX
					</span>
				</Show>
				<Show when={props.badges?.tailwind}>
					<span class={`${badgeClass} badge-info`}>
						<IconTailwind class="size-4" /> Tailwind
					</span>
				</Show>
				<Show when={props.badges?.python}>
					<span class={`${badgeClass} badge-warning`}>
						<IconPython class="size-4" /> Python
					</span>
				</Show>
			</span>
		</Show>
	);

	const Details = () => (
		<>
			<h2 class="inline-flex items-baseline justify-center gap-1.5 text-center font-semibold text-xl transition-colors duration-150 ease-in-out group-hover:text-info">
				{props.title}
				<Show when={props.url}>
					<a
						class="link lg:link-hover -mt-1.5 inline-flex w-min font-semibold text-xs opacity-60 "
						href={props.url}
						onClick={(e) => e.stopPropagation()}
					>
						(
						<p class="max-w-[10rem] overflow-hidden text-ellipsis whitespace-nowrap">
							{props.url?.slice(props.url.indexOf("//") + 2)}
						</p>
						)
					</a>
				</Show>
			</h2>
			<Badges />
			<Show when={props.description}>
				<p class="text-base">{props.description}</p>
			</Show>
			{props.children}
		</>
	);

	let container!: HTMLSpanElement;
	const pos = useMousePosition();
	const relativePos = createPositionToElement(
		() => container,
		() => pos,
	);

	return (
		<button
			class="hover:-translate-y-[2%] w-full cursor-pointer transition duration-150 ease-in-out lg:grayscale lg:hover:grayscale-0"
			onClick={() => {
				if (props.url) {
					const a = document.createElement("a");
					a.href = props.url;
					a.rel = "noreferrer";
					a.target = "_blank";
					a.click();
					a.remove();
				}
			}}
			onMouseEnter={(e) => e.target.classList.remove("lg:grayscale")}
			type="button"
		>
			<span
				class={`group motion-duration-300 motion-ease-in-out relative isolate ${delays[props.delay ?? 0]} flex flex-col items-start justify-start gap-1.5 overflow-hidden rounded-md border border-neutral/10 bg-neutral/5 px-3 pt-1 pb-2 text-start shadow-xs backdrop-blur-lg transition-[border-color,box-shadow] duration-150 ease-in-out hover:border-info hover:shadow-sm `}
				classList={{
					"motion-preset-slide-down lg:motion-preset-slide-right motion-blur-in":
						shouldAnimate(),
				}}
				ref={container}
			>
				<div
					class="-translate-x-1/2 -translate-y-1/2 absolute z-[-1] hidden size-72 rounded-full bg-radial from-white/10 light:from-black/10 light:via-black/0 via-white/0 to-transparent transition-opacity duration-150 ease-in-out lg:block"
					style={{
						left: `${relativePos.x}px`,
						top: `${relativePos.y}px`,
					}}
				/>
				<Details />
			</span>
		</button>
	);
}
