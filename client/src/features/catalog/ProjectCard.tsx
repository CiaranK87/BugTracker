import { Button, Card, CardActions, CardContent, CardHeader, Divider, Typography } from "@mui/material";
import { Project } from "../../app/models/Project";
import { Link } from "react-router-dom";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Card>
      <CardHeader
        title={project.title}
        titleTypographyProps={{
          sx: { fontWeight: "bold", color: "primary.main" },
        }}
      />
      <Divider />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.id}
        </Typography>
        <Divider />
        <Typography gutterBottom variant="h5" component="div">
          {project.projectOwner}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/catalog/${project.id}`} size="small">
          Details
        </Button>
        <Button component={Link} to={`/ticketpage`} size="small">
          Tickets
        </Button>
      </CardActions>
    </Card>
  );
}
