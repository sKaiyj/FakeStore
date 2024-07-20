import { Box, Button, Container, Typography } from "@mui/material";
import BasketCard from "../../components/basketCard/BasketCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getOne } from "../../API/API";

export default function BasketPage() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const user = useSelector((state: any) => state.user);
  const basket = useSelector((state: any) => state.basket);
  const login = useSelector((state: any) => state.login);
  const navigate = useNavigate();
  if (!login) navigate("/login");

  useEffect(() => {
    setProducts(basket);

    async function getProducts(bask: any) {
      let totalPrice = 0;
      for (let i = 0; i < bask.length; i++) {
        await getOne(bask[i].productId).then((data: any) => {
          totalPrice += data.price * bask[i].quantity;
        });
      }
      return totalPrice;
    }
    getProducts(basket).then((data) => setTotal(data));
  }, [basket]);

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
          <BasketCard products={product} key={product.productId} />
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
        <Typography sx={{ fontSize: "20px" }}>Total: ${total}</Typography>
        <Button sx={{ width: "100%", maxWidth: 500 }} variant='contained'>
          Order
        </Button>
      </Box>
    </Container>
  );
}
