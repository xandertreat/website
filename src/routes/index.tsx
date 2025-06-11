import Links from "~/components/links";
import AppThemeSwitcher from "~/components/theme";
import Tabs from "~/components/ui/tabs";

export default function Index() {
	return (
		<main class="motion-duration-3000 motion-opacity-in mx-auto flex h-screen w-1/2 flex-col items-center justify-center gap-3 text-center">
			<span class="relative inline-flex items-center">
				<h1 class="font-semibold text-3xl">Xander Treat</h1>
				<AppThemeSwitcher class="tooltip  tooltip-info btn btn-ghost btn-circle motion-duration-500 motion-ease-in-out motion-delay-600 -top-1 -right-5.5 absolute size-5" />
			</span>
			<Tabs>
				<Tabs.Tab id="about" />
				<Tabs.Content for="about">
					Welcome! I'm Xander Treat, a recent ASU graduate in Software
					Engineering.
				</Tabs.Content>
				<Tabs.Tab id="projects" />
				<Tabs.Content for="projects">1425421</Tabs.Content>
				<Tabs.Tab id="gallery" />
				<Tabs.Content for="gallery">
					<p class="font-extralight opacity-30">coming soon...</p>
				</Tabs.Content>
				<Tabs.Tab id="other" />
				<Tabs.Content for="other">bvcvxc</Tabs.Content>
			</Tabs>
			<Links />
		</main>
	);
}
