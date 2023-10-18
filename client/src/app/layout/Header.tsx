import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Notifications } from "@mui/icons-material";

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const midLinks = [
  { title: "projects", path: "/catalog" },
  { title: "tickets", path: "/ticketPage" },
];

const rightLinks = [
  { title: "notifications", path: "/notifications" },
  { title: "my profile", path: "/userprofile" },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" component={NavLink} to="/" sx={navStyles}>
            BugTracker
          </Typography>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Box>

        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box display="flex" alignItems="center">
          <IconButton size="large" sx={{ color: "inherit" }}>
            <Badge badgeContent={4} color="secondary">
              <Notifications />
            </Badge>
          </IconButton>
          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
