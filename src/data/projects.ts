export type Badges = Partial<{
	astro: boolean;
	solid: boolean;
	jsx: boolean;
	tailwind: boolean;
	vite: boolean;
	typescript: boolean;
	python: boolean;
	npm: boolean;
	ci: boolean;
	docker: boolean;
	nixpacks: boolean;
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
			"Architected a local-first, statically-generated web app that lets developers design, live-preview, and export terminal UI themes for Python’s Textual framework—instant feedback, zero server overhead.",
		badges: {
			typescript: true,
			solid: true,
			jsx: true,
			tailwind: true,
			python: true,
			docker: true,
			ci: true,
		},
	},
	{
		name: "Astro Iconify",
		url: "https://www.npmjs.com/package/@xtreat/astro-iconify",
		description:
			"Authored and maintain a build-time Iconify component that tree-shakes SVGs inside Astro, improving developer experience and allowing for dynamicism strategies.",
		badges: { typescript: true, astro: true, npm: true, ci: true },
	},
	{
		name: "BrandonDorsey.com",
		url: "https://brandondorsey.com",
		description:
			"Delivered a pilot's personal website with perfect Core Web Vitals: image CDN optimisation, utilizing static-site generation and hydration, and a photo gallery that scales with new media.",
		badges: {
			typescript: true,
			astro: true,
			tailwind: true,
			solid: true,
			nixpacks: true,
			ci: true,
		},
	},
	{
		name: "xtreat.dev (Personal Site)",
		url: "https://xtreat.dev",
		description:
			"Engineered a SolidStart static site with custom components and advanced routing that scores 100/100 on PageSpeed Insights; orchestrated zero-downtime CI/CD via Coolify using Docker and Nixpacks images.",
		badges: {
			solid: true,
			typescript: true,
			tailwind: true,
			vite: true,
			nixpacks: true,
			docker: true,
			ci: true,
		},
	},
];

export default data;
