import { Button, Grid } from "@mui/material";
import MyCard from "../card/MyCard";

const CardsGrid = ({
  products,
  onLoadMore,
  limit,
}: {
  products: [any];
  onLoadMore: () => void;
  limit: number;
}) => {
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
        {products.slice(0, limit).map((item, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <MyCard item={item} />
          </Grid>
        ))}
      </Grid>
      {limit >= products.length ? null : (
        <Button onClick={onLoadMore} variant='contained' sx={{ mt: 2 }}>
          Show More
        </Button>
      )}
    </>
  );
};

export default CardsGrid;
