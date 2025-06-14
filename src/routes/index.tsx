import Links from "~/components/links";
import About from "~/components/tabs/about";
import Gallery from "~/components/tabs/gallery";
import Other from "~/components/tabs/other";
import Projects from "~/components/tabs/projects";
import AppThemeSwitcher from "~/components/theme";
import Tabs from "~/components/ui/tabs";

export default function Index() {
	const DesktopLayout = () => (
		<div class="hidden lg:block">
			<span class="relative inline-flex items-center">
				<h1 class="text-nowrap font-semibold text-3xl">Xander Treat</h1>
				<AppThemeSwitcher class="tooltip tooltip-info btn btn-ghost btn-circle motion-duration-500 motion-ease-in-out motion-delay-600 -top-1 -right-5.5 absolute size-5" />
			</span>
			<Tabs>
				<Tabs.Tab id="about" />
				<Tabs.Content for="about">
					<About />
				</Tabs.Content>
				<Tabs.Tab id="projects" />
				<Tabs.Content for="projects">
					<Projects />
				</Tabs.Content>
				<Tabs.Tab id="gallery" />
				<Tabs.Content for="gallery">
					<Gallery />
				</Tabs.Content>
				<Tabs.Tab id="other" />
				<Tabs.Content for="other">
					<Other />
				</Tabs.Content>
				<Links />
			</Tabs>
		</div>
	);

	const MobileLayout = () => (
		<div class="flex flex-col items-center justify-center gap-3 lg:hidden">
			<span class="relative inline-flex items-center">
				<h1 class="font-semibold text-3xl">Xander Treat</h1>
				<AppThemeSwitcher class="tooltip tooltip-info btn btn-ghost btn-circle motion-duration-500 motion-ease-in-out motion-delay-600 -top-1 -right-5.5 absolute size-5" />
			</span>
			<Tabs>
				<Tabs.Tab id="about" />
				<Tabs.Content for="about">
					<About />
				</Tabs.Content>
				<Tabs.Tab id="projects" />
				<Tabs.Content for="projects">
					<Projects />
				</Tabs.Content>
				<Tabs.Tab id="gallery" />
				<Tabs.Content for="gallery">
					<Gallery />
				</Tabs.Content>
				<Tabs.Tab id="other" />
				<Tabs.Content for="other">
					<Other />
				</Tabs.Content>
			</Tabs>
			<Links />
		</div>
	);

	return (
		<main class="motion-duration-3000 motion-opacity-in mx-auto flex h-screen w-1/2 items-center justify-center text-center">
			<DesktopLayout />
			<MobileLayout />
		</main>
	);
}
