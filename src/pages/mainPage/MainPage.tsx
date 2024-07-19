import { Container, Typography } from "@mui/material";
import SearchInput from "../../components/searchInput/SearchInput";
import CardsGrid from "../../components/cardsGrid/CardsGrid";

export default function MainPage() {
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
      <CardsGrid />
    </Container>
  );
}
