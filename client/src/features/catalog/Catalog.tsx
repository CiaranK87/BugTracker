import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Project } from "../../app/models/Project";
import ProjectList from "./ProjectList";
import { useEffect, useState } from "react";

export default function Catalog() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.list()
      .then((projects) => setProjects(projects))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingComponent message="Loading projects..." />;

  return (
    <>
      <ProjectList projects={projects} />
    </>
  );
}
