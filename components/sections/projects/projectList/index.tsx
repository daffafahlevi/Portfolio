import { projectsList } from "@/projects"
import { ProjectListSection } from "./projectsListSection"

export const MyProjects = () => {
    return (
        <ProjectListSection
            projects={projectsList}
        />
    )
}