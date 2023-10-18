import { Box, Grid, Typography } from "@mui/material";

export default function TicketPage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Typography variant="h3">Ticket Details</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3">Ticket Comments</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3">Ticket History</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3">Image Upload</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
