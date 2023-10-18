import { Box, Card, CardHeader, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Project } from "../../app/models/Project";
import agent from "../../app/api/agent";
import NotFound from "../../app/api/errors/NotFound";
import LoadingComponent from "../../app/layout/LoadingComponent";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    id &&
      agent.Catalog.details(parseInt(id))
        .then((response) => setProject(response))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <LoadingComponent message="Loading project..." />;

  if (!project) return <NotFound />;

  // return <Typography variant="h2">{project.title}</Typography>;

  return (
    <>
      <Grid item xs={12} marginBottom={5}>
        <Card>
          <CardHeader
            title={"Project Details"}
            titleTypographyProps={{
              sx: { fontWeight: "bold", color: "primary.main", textAlign: "center" },
            }}
          />
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            {project.title}
          </Typography>
        </Card>
      </Grid>
      <Box display="flex" justifyContent={"space-between"}>
        <Grid item xs={6} sx={{ width: "50%" }}>
          <Card>
            <CardHeader
              title={"Assigned Personnel"}
              titleTypographyProps={{
                sx: { fontWeight: "bold", color: "primary.main", textAlign: "center" },
              }}
            />
          </Card>
        </Grid>

        <Grid item xs={6} sx={{ width: "50%" }}>
          <Card>
            <CardHeader
              title={"Tickets for this project"}
              titleTypographyProps={{
                sx: { fontWeight: "bold", color: "primary.main", textAlign: "center" },
              }}
            />
          </Card>
        </Grid>
      </Box>
    </>
  );
}
