import { Card, CardContent, Typography, Rating, Button } from "@mui/material";
import CardImg from "../cardImg/CardImg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import MyModal from "../myModal/MyModal";
interface CardProps {
  item: {
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
  };
}
const MyCard = ({ item }: CardProps) => {
  const [inBasket, setInBasket] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state: { basket: [] }) => state.basket);
  const login = useSelector((state: { login: boolean }) => state.login);
  const navigate = useNavigate();
  useEffect(() => {
    if (
      products.find(
        (product: { productId: number }) => product.productId === item.id
      )
    ) {
      setInBasket(true);
      return;
    } else setInBasket(false);
  }, [products]);
  const addToBasket = () => {
    if (login) {
      setOpen(true);
      if (
        products.find(
          (product: { productId: number }) => product.productId === item.id
        )
      )
        return;
      setInBasket(true);
      dispatch({
        type: "ADD_TO_BASKET",
        payload: { productId: item.id, quantity: 1 },
      });
    } else navigate("/login");
  };
  const removeFromBasket = () => {
    setInBasket(false);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: item.id,
    });
    setOpen(false);
  };
  const onCard = (e: any) => {
    if (e.target.tagName === "BUTTON") return;
    navigate(`/product?id=${item.id}`);
  };
  return (
    <Card
      sx={{
        display: "flex",
        p: 2,
        justifyContent: "center",
        alignItems: "center",
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        cursor: "pointer",
        boxShadow: 3,
        height: "100%",
        ":hover": {
          boxShadow: 8,
          translate: "0px -4px",
        },
      }}
    >
      <CardContent
        onClick={(e) => onCard(e)}
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          gap: 1,
        }}
      >
        <CardImg src={item.image} height={300} />
        <Typography
          sx={{
            textAlign: "center",
            mt: 2,
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {item.title}
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: "16px", mt: 1 }}>
          ${item.price}
        </Typography>
        <Rating precision={0.1} value={item.rating.rate} readOnly />
        {inBasket ? (
          <Button
            onClick={removeFromBasket}
            sx={{ mt: "auto", p: "6px 10px" }}
            color='primary'
            variant='contained'
          >
            Remove from Cart
          </Button>
        ) : (
          <Button
            onClick={addToBasket}
            sx={{ mt: "auto" }}
            color='primary'
            variant='contained'
          >
            Add to Cart
          </Button>
        )}
      </CardContent>
      <MyModal
        title={"Added to cart"}
        open={open}
        desciption={`You are added this "${item.title}" to your basket`}
      />
    </Card>
  );
};

export default MyCard;
