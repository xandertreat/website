import { For } from "solid-js";
import Project from "~/components/ui/project";
import projects from "~/data/projects";

export default function Projects() {
	return (
		<div class="flex flex-col items-center justify-center gap-5 p-1">
			<For each={projects}>
				{(project, idx) => (
					<Project
						badges={project.badges}
						delay={(idx() + 1) * 200}
						description={project.description}
						title={project.name}
						url={project.url}
					/>
				)}
			</For>
		</div>
	);
}
