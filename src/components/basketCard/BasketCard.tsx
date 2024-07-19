import { Container, Box, Typography, Rating, Button } from "@mui/material";
import CardImg from "../cardImg/CardImg";
import { getOne } from "../../API/API";
import { useEffect, useState } from "react";
const BasketCard = ({ products }: any) => {
  const [productData, setProductData] = useState({} as any);
  const [count, setCount] = useState(1);
  useEffect(() => {
    getOne(products.productId).then((data: any) => {
      setProductData(data);
      setCount(products.quantity);
    });
  }, []);
  const handleCount = (type: string) => {
    if (type === "plus") {
      setCount(count + 1);
    } else {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  };
  if (!productData.title) return <></>;
  return (
    <Container
      sx={{
        display: "grid",
        mt: 2,
        gap: 6,
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyСontent: "center",
        boxShadow: 4,
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
      }}
      maxWidth='lg'
    >
      <CardImg src={productData.image} height={300} width={300} />
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
            {productData.title}
          </Typography>
          <Typography
            variant='h5'
            sx={{ fontWeight: "bold", fontSize: "20px" }}
          >
            ${productData.price}
          </Typography>
          <Rating precision={0.1} value={3.4} readOnly />
          <Box>
            <Typography sx={{ fontSize: "20px" }}>Description</Typography>
            <Typography sx={{ mt: 1 }}>{productData.description}</Typography>
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
        <Typography sx={{ fontSize: "20px" }}>
          Total: ${productData.price * count}
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button
            onClick={() => handleCount("minus")}
            sx={{ width: "100%", maxWidth: 500 }}
            variant='outlined'
          >
            -
          </Button>
          <Typography sx={{ fontSize: "20px" }}>{count}</Typography>
          <Button
            onClick={() => handleCount("plus")}
            sx={{ width: "100%", maxWidth: 500 }}
            variant='outlined'
          >
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
