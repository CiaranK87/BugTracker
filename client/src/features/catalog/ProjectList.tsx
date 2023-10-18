import { Grid } from "@mui/material";
import { Project } from "../../app/models/Project";
import ProjectCard from "./ProjectCard";

interface Props {
  projects: Project[];
}

export default function ProjectList({ projects }: Props) {
  return (
    <Grid container spacing={4}>
      {projects.map((project) => (
        <Grid item xs={3} key={project.id}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
}
