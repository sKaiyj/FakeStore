import { Container, Typography } from "@mui/material";
import SearchInput from "../../components/searchInput/SearchInput";
import CardsGrid from "../../components/cardsGrid/CardsGrid";
import { getAll } from "../../API/API";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
export default function MainPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAll().then((data) => setProducts(data));
  }, []);
  return (
    <Container
      maxWidth='lg'
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
      }}
    >
      <Typography variant='h4'>Our Fake Products</Typography>
      <SearchInput />
      {products.length === 0 ? <Loader /> : <CardsGrid products={products} />}
    </Container>
  );
}
