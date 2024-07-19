import { Box, Button, Container, Rating, Typography } from "@mui/material";
import CardImg from "../../components/cardImg/cardImg";

export default function ProductPage() {
  return (
    <Container
      sx={{
        display: "flex",
        mt: 5,
        gap: 6,
        flexDirection: { xs: "column", md: "row" },
      }}
      maxWidth='lg'
    >
      <CardImg
        src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
        height={500}
      />

      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "80%",
          }}
        >
          <Typography variant='h4'>
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </Typography>
          <Typography variant='h5' sx={{ fontWeight: "bold" }}>
            $109.95
          </Typography>
          <Rating precision={0.1} value={3.4} readOnly />
          <Box>
            <Typography sx={{ fontSize: "20px" }}>Description</Typography>
            <Typography sx={{ mt: 1 }}>
              Your perfect pack for everyday use and walks in the forest. Stash
              your laptop (up to 15 inches) in the padded sleeve, your everyday.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 2,
            mb: 2,
            alignItems: "center",
          }}
        >
          <Button sx={{ width: "100%", maxWidth: 500 }} variant='contained'>
            Add to Cart
          </Button>
          <Button sx={{ width: "100%", maxWidth: 500 }} variant='outlined'>
            Buy Now
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
