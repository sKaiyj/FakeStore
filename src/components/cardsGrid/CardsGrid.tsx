import { Button, Grid } from "@mui/material";
import MyCard from "../card/MyCard";

const CardsGrid = () => {
  return (
    <>
      <Grid
        sx={{
          width: "100%",
        }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        container
        spacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {[...Array(8)].map((_, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <MyCard />
          </Grid>
        ))}
      </Grid>
      <Button variant='outlined' sx={{ mt: 2 }}>
        Load More
      </Button>
    </>
  );
};

export default CardsGrid;
