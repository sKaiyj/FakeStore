import { Container, Typography } from "@mui/material";
import SearchInput from "../../components/searchInput/SearchInput";
import CardsGrid from "../../components/cardsGrid/CardsGrid";
import { getAll } from "../../API/API";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";

export default function ProductsPage() {
  const products = useSelector((state: { products: any }) => state.products);
  const dispatch = useDispatch();
  const search = useSelector((state: { search: string }) => state.search);
  const sort = useSelector((state: { sort: string }) => state.sort);
  const category = useSelector(
    (state: { categories: string }) => state.categories
  );
  const [limit, setLimit] = useState(5);
  const [filteredProducts, setFilteredProducts] = useState(products);
  useEffect(() => {
    getAll().then((data) => {
      dispatch({ type: "SET_PRODUCTS", payload: data });
      setFilteredProducts(data);
    });
  }, []);
  const loadMore = () => {
    setLimit(limit + 5);
  };
  useEffect(() => {
    setFilteredProducts(
      products
        .filter((product: any) => {
          if (product.title.toLowerCase().includes(search.toLowerCase())) {
            return product;
          }
        })
        .filter((product: any) => {
          if (product.category === category || category === "All") {
            return product;
          }
        })
        .sort((a: any, b: any) => {
          if (sort === "title") {
            return a.title.localeCompare(b.title);
          } else if (sort === "price") {
            return a.price - b.price;
          } else if (sort === "rating") {
            return b.rating.rate - a.rating.rate;
          }
        })
    );
  }, [search, sort, category]);

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
      <Typography variant='h4' sx={{ color: "#CFC5C5" }}>
        Our Fake Products
      </Typography>
      <SearchInput />
      {products.length === 0 ? (
        <Loader />
      ) : filteredProducts.length === 0 ? (
        <Typography variant='h5' sx={{ color: "#CFC5C5" }}>
          No products found
        </Typography>
      ) : (
        <CardsGrid
          products={filteredProducts}
          onLoadMore={loadMore}
          limit={limit}
        />
      )}
    </Container>
  );
}
