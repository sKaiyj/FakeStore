import { Box, Button, Container, Typography } from "@mui/material";
import BasketCard from "../../components/basketCard/BasketCard";
export default function BasketPage() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        mt: 2,
      }}
    >
      <Typography variant='h4'>Your Cart</Typography>
      <BasketCard />
      <BasketCard />
      <BasketCard />
      <Box
        sx={{
          display: "flex",
          gap: 4,
          mt: 4,
          mb: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography sx={{ fontSize: "20px" }}>Total: $109.95</Typography>
        <Button sx={{ width: "100%", maxWidth: 500 }} variant='contained'>
          Order
        </Button>
      </Box>
    </Container>
  );
}
