export default function About() {
	return (
		<article class="flex min-h-[12rem] flex-col gap-4 text-pretty text-sm leading-relaxed lg:text-base">
			<section class="space-y-2">
				<h2 class="font-medium text-lg lg:text-xl">Welcome</h2>
				<p>
					I'm Xander Treat, a recent ASU graduate in Software Engineering.
					<br /> My passion lies in creating intuitive and performant web
					experiences.
				</p>
			</section>
			<section class="space-y-2">
				<p>
					I am constantly expanding my knowledge in fullstack development,
					<br /> with a particular emphasis on modern front-end technologies and
					user experience. <br />
					<strong>
						<a
							class="link font-light opacity-60"
							href="mailto:xander.treat@gmail.com"
						>
							Contact me
						</a>
					</strong>
				</p>
			</section>
		</article>
	);
}
