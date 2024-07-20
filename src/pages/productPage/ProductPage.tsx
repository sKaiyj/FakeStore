import { Box, Button, Container, Rating, Typography } from "@mui/material";
import CardImg from "../../components/cardImg/CardImg";
import { useSearchParams } from "react-router-dom";
import { getOne } from "../../API/API";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import MyModal from "../../components/myModal/MyModal";
interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export default function ProductPage() {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState({
    rating: { rate: 0, count: 0 },
  } as ProductProps);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const id = Number(searchParams.get("id"));

  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.basket);
  const addToBasket = () => {
    if (products.find((product: any) => product.productId === id)) return;
    dispatch({
      type: "ADD_TO_BASKET",
      payload: { productId: id, quantity: 1 },
    });
    setOpen(true);
    setInBasket(true);
  };
  const [inBasket, setInBasket] = useState(false);

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
    setOpen(false);
    setInBasket(false);
  };

  useEffect(() => {
    getOne(id).then((data: ProductProps) => {
      setProduct(data);
      setLoading(false);
    });
    if (products.find((product: any) => product.productId === id)) {
      setInBasket(true);
      console.log(inBasket);
      return;
    }
  }, [id]);

  if (loading) return <Loader />;
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
      <CardImg src={product.image} height={500} width={300} />

      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "80%",
          }}
        >
          <Typography variant='h4'>{product.title}</Typography>
          <Typography variant='h5' sx={{ fontWeight: "bold" }}>
            ${product.price}
          </Typography>
          <Rating precision={0.1} value={product.rating.rate} readOnly />
          <Box>
            <Typography sx={{ fontSize: "20px" }}>Description</Typography>
            <Typography sx={{ mt: 1 }}>{product.description}</Typography>
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
          {inBasket ? (
            <Button
              onClick={removeFromBasket}
              sx={{ width: "100%", maxWidth: 500 }}
              variant='contained'
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={addToBasket}
              sx={{ width: "100%", maxWidth: 500 }}
              variant='contained'
            >
              Add to Cart
            </Button>
          )}

          <Button sx={{ width: "100%", maxWidth: 500 }} variant='outlined'>
            Buy Now
          </Button>
          <MyModal open={open} />
        </Box>
      </Box>
    </Container>
  );
}
