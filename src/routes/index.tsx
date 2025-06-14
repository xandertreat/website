import Links from "~/components/links";
import About from "~/components/tabs/about";
import Gallery from "~/components/tabs/gallery";
import Other from "~/components/tabs/other";
import Projects from "~/components/tabs/projects";
import AppThemeSwitcher from "~/components/theme";
import Tabs from "~/components/ui/tabs";

export default function Index() {
	return (
		<div class="motion-duration-3000 motion-opacity-in mx-auto flex h-screen w-1/2 items-center justify-center text-center">
			<main class="flex flex-col items-center justify-center gap-3 lg:block">
				<span class="inline-flex items-center gap-8">
					<h1 class="motion-preset-slide-down relative font-semibold text-3xl">
						Xander Treat
						<AppThemeSwitcher
							class="tooltip tooltip-info btn btn-ghost btn-circle motion-duration-500 motion-ease-in-out motion-delay-600 -top-1 -right-5.5 absolute size-5 lg:grayscale"
							onMouseEnter={(e) => e.target.classList.remove("lg:grayscale")}
						/>
					</h1>
					<Links class="lg:hidden" />
				</span>
				<Tabs>
					<Tabs.Tab id="about" />
					<Tabs.Tab id="projects" />
					<Tabs.Tab id="gallery" />
					<Tabs.Tab id="other" />
					<Links class="max-lg:hidden" />
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
