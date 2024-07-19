import { Container, Box, Typography, Rating, Button } from "@mui/material";
import CardImg from "../cardImg/cardImg";

const BasketCard = () => {
  return (
    <Container
      sx={{
        display: "flex",
        mt: 2,
        gap: 6,
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        boxShadow: 4,
      }}
      maxWidth='lg'
    >
      <CardImg
        src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
        height={300}
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
          <Typography variant='h4' sx={{ fontSize: "24px" }}>
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </Typography>
          <Typography
            variant='h5'
            sx={{ fontWeight: "bold", fontSize: "20px" }}
          >
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
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mb: 2,
          alignItems: "center",
          minWidth: 200,
        }}
      >
        <Typography sx={{ fontSize: "20px" }}>Total: $109.95</Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button sx={{ width: "100%", maxWidth: 500 }} variant='outlined'>
            -
          </Button>
          <Typography sx={{ fontSize: "20px" }}>1</Typography>
          <Button sx={{ width: "100%", maxWidth: 500 }} variant='outlined'>
            +
          </Button>
        </Box>

        <Button sx={{ width: "100%", maxWidth: 500 }} variant='contained'>
          Remove from Cart
        </Button>
      </Box>
    </Container>
  );
};

export default BasketCard;
