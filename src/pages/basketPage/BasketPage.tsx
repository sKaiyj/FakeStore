import { Box, Button, Container, Typography } from "@mui/material";
import BasketCard from "../../components/basketCard/BasketCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getOne } from "../../API/API";
import MyModal from "../../components/myModal/MyModal";

export default function BasketPage() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const basket = useSelector((state: { basket: [] }) => state.basket);
  const login = useSelector((state: { login: boolean }) => state.login);
  const [openBuy, setOpenBuy] = useState(false);
  const navigate = useNavigate();
  if (!login) navigate("/login");
  const buyNow = () => {
    setOpenBuy(true);
  };
  useEffect(() => {
    setProducts(basket);

    async function getProducts(
      bask: { productId: number; quantity: number }[]
    ) {
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
      <Typography variant='h4' sx={{ color: "#CFC5C5", mt: 2 }}>
        Your Cart
      </Typography>
      {products.length === 0 ? (
        <Typography sx={{ fontSize: "20px", mt: 2 }}>Cart is empty</Typography>
      ) : (
        products.map((product: { productId: number; quantity: number }) => (
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
        <Typography sx={{ fontSize: "20px", color: "#CFC5C5" }}>
          Total: ${total.toFixed(2)}
        </Typography>
        <Button
          onClick={buyNow}
          sx={{ width: "100%", maxWidth: 500 }}
          variant='contained'
        >
          Order
        </Button>
        <MyModal
          title={"Order"}
          onClose={() => setOpenBuy(false)}
          open={openBuy}
          desciption={`Order for $${total.toFixed(2)}?`}
        >
          <Button sx={{ mt: 2 }} variant='contained'>
            Order
          </Button>
        </MyModal>
      </Box>
    </Container>
  );
}
