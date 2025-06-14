export type Badges = Partial<{
	astro: boolean;
	solid: boolean;
	jsx: boolean;
	tailwind: boolean;
	vite: boolean;
	typescript: boolean;
	python: boolean;
}>;

interface Project {
	name: string;
	url: string;
	description: string;
	badges: Badges;
}

const data: Project[] = [
	{
		name: "Textual Theme Generator",
		url: "https://ttg.xtreat.dev",
		description:
			"A local-first client-side statically generated reactive & performant web application to help developers create & visualize themes for their Python Textual terminal user interface apps",
		badges: {
			typescript: true,
			solid: true,
			jsx: true,
			tailwind: true,
			python: true,
		},
	},
	{
		name: "Astro Iconify",
		url: "https://www.npmjs.com/package/@xtreat/astro-iconify",
		description:
			"A on-demand iconify icon component designed for dynamicism, utilziing Astro component's server first nature, ideal for SSG set-up projects",
		badges: {
			typescript: true,
			astro: true,
		},
	},
	{
		name: "Friend's Website",
		url: "https://brandondorsey.com",
		description:
			"A site I created and collaboratively designed for a friend, using Astro.js for static site generation and media optimization for hosting, with Solid.js for client-side hydrated islands using Framer Motion",
		badges: {
			typescript: true,
			astro: true,
			tailwind: true,
			solid: true,
		},
	},
];

export default data;
