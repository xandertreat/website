import { lazy } from "solid-js";

import Links from "~/components/links";
import AppThemeSwitcher from "~/components/theme";

// Tabs
import Tabs from "~/components/ui/tabs";
const About = lazy(() => import("~/components/tabs/about"));
const Gallery = lazy(() => import("~/components/tabs/gallery"));
const Other = lazy(() => import("~/components/tabs/other"));
const Projects = lazy(() => import("~/components/tabs/projects"));

export default function Index() {
	return (
		<div class="motion-duration-3000 motion-opacity-in mx-auto flex min-h-screen w-1/2 items-baseline justify-center py-5 text-center">
			<main class="fhd:mt-[35vh] uhd:mt-[50vh] xs:mt-[30vh] inline-flex flex-col items-center justify-center gap-3 lg:block">
				<span class="inline-flex flex-col items-center max-sm:space-y-2 sm:flex-row sm:max-lg:space-x-8">
					<h1 class="motion-preset-slide-down relative text-nowrap font-semibold text-3xl">
						Xander Treat
						<AppThemeSwitcher
							class="tooltip tooltip-info btn btn-ghost btn-circle motion-duration-500 motion-ease-in-out motion-delay-600 -top-1 -right-5.5 absolute size-5 lg:grayscale"
							onMouseEnter={(e) => e.target.classList.remove("lg:grayscale")}
						/>
					</h1>
					<Links class="inline-flex lg:hidden" />
				</span>
				<Tabs>
					<Tabs.Tab id="about" />
					<Tabs.Tab id="projects" />
					<Tabs.Tab id="gallery" />
					<Tabs.Tab id="other" />
					<Links class="hidden lg:inline-flex" />
					<Tabs.Content for="about">
						<About />
					</Tabs.Content>
					<Tabs.Content for="projects">
						<Projects />
					</Tabs.Content>
					<Tabs.Content for="gallery">
						<Gallery />
					</Tabs.Content>
					<Tabs.Content for="other">
						<Other />
					</Tabs.Content>
				</Tabs>
			</main>
		</div>
	);
}
