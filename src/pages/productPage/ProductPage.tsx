import { Box, Button, Container, Rating, Typography } from "@mui/material";
import CardImg from "../../components/cardImg/cardImg";
import { useNavigate, useSearchParams } from "react-router-dom";
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
  const [openBuy, setOpenBuy] = useState(false);

  const [loading, setLoading] = useState(true);
  const id = Number(searchParams.get("id"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.basket);
  const login = useSelector((state: { login: boolean }) => state.login);
  const buyNow = () => {
    setOpenBuy(true);
  };
  const addToBasket = () => {
    if (login) {
      setOpen(true);
      setInBasket(true);
      if (products.find((product: any) => product.productId === id)) return;
      dispatch({
        type: "ADD_TO_BASKET",
        payload: { productId: id, quantity: 1 },
      });
    } else navigate("/login");
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
        color: "#CFC5C5",
        mb: 5,
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

          <Button
            onClick={buyNow}
            sx={{ width: "100%", maxWidth: 500 }}
            variant='contained'
          >
            Buy Now
          </Button>
          <MyModal
            title={"Added to cart"}
            open={open}
            desciption={`You are added this "${product.title}" to your basket`}
          />
          <MyModal
            title={"Buy now"}
            onClose={() => setOpenBuy(false)}
            open={openBuy}
            desciption={`Buy a "${product.title}" for $${product.price} now`}
          >
            <Button sx={{ mt: 2 }} variant='contained'>
              Buy Now
            </Button>
          </MyModal>
        </Box>
      </Box>
    </Container>
  );
}
