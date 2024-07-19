import { Card, CardContent, Typography, Rating, Button } from "@mui/material";
import CardImg from "../cardImg/cardImg";
import { Link } from "react-router-dom";

const MyCard = () => {
  return (
    <Link to='/product'>
      <Card
        sx={{
          display: "flex",
          p: 2,
          justifyContent: "center",
          alignItems: "center",
          transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          cursor: "pointer",
          boxShadow: 3,
          ":hover": {
            boxShadow: 8,
            translate: "0px -4px",
          },
        }}
      >
        <CardContent
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardImg
            src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
            height={300}
          />
          <Typography
            sx={{
              textAlign: "center",
              mt: 2,
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </Typography>
          <Typography sx={{ textAlign: "center", fontSize: "16px", mt: 1 }}>
            $109.95
          </Typography>
          <Rating precision={0.1} value={3.4} readOnly />
          <Button sx={{ mt: 2 }} color='primary' variant='contained'>
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MyCard;
