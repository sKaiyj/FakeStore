import { Box, Button, Container, Typography } from "@mui/material";
import BasketCard from "../../components/basketCard/BasketCard";
import { getCart } from "../../API/API";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function BasketPage() {
  const [products, setProducts] = useState([]);
  const user = useSelector((state: any) => state.user);
  const login = useSelector((state: any) => state.login);
  const navigate = useNavigate();
  if (!login) navigate("/login");

  useEffect(() => {
    getCart(user.user.userId).then((data) => setProducts(data.products));
  }, []);

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
      {products.length === 0 ? (
        <Typography sx={{ fontSize: "20px", mt: 2 }}>Cart is empty</Typography>
      ) : (
        products.map((product: any) => (
          <BasketCard products={product} key={product._id} />
        ))
      )}

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
