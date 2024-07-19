import { Card, CardContent, Typography, Rating, Button } from "@mui/material";
import CardImg from "../cardImg/CardImg";
import { Link } from "react-router-dom";
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
  return (
    <Link to={"/product/?id=" + item.id}>
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
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
          <Button sx={{ mt: 2 }} color='primary' variant='contained'>
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MyCard;
