import { Box, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicMenu from "../BasicMenu/BasicMenu";
import { getCategories } from "../../API/API";
import MenuIcon from "@mui/icons-material/Menu";

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const sortTypes = ["title", "price", "rating"];
  const [categories, setCategories] = useState(["All"]);
  const categorySearch = useSelector(
    (state: { categories: string }) => state.categories
  );
  useEffect(() => {
    getCategories().then((data) => {
      setCategories(["All", ...data]);
      dispatch({ type: "SET_CATEGORIES", payload: "All" });
    });
  }, []);
  const dispatch = useDispatch();
  const setCategory = (category: string) => {
    dispatch({ type: "SET_CATEGORIES", payload: category });
  };
  const handleSearch = (e: any) => {
    if (e.key === "Enter") {
      dispatch({ type: "SEARCH", payload: search });
      e.preventDefault();
    }
  };

  const onSearch = () => {
    dispatch({ type: "SEARCH", payload: search });
  };
  const setSort = (sort: string) => {
    dispatch({ type: "SET_SORT", payload: sort });
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper
        component='form'
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          maxWidth: 600,
          width: "100%",
          m: "0 auto",
        }}
      >
        <BasicMenu categories={sortTypes} setSort={setSort}>
          <MenuIcon />
        </BasicMenu>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='Search Fake Product'
          inputProps={{ "aria-label": "Search Fake Product" }}
          value={search}
          onKeyDown={(e) => handleSearch(e)}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton
          onClick={onSearch}
          type='button'
          sx={{ p: "10px" }}
          aria-label='search'
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      {categories.length === 1 ? (
        <Box
          sx={{
            color: "primary.main",
            border: "1px solid",
            padding: "8x",
            borderRadius: "8px",
            cursor: "pointer",
            p: 1,
            mt: 1,
            fontSize: "20px",
            ":hover": { color: "primary.dark" },
          }}
        >
          All
        </Box>
      ) : (
        <BasicMenu categories={categories} setSort={setCategory}>
          <Box
            sx={{
              color: "primary.main",
              border: "1px solid",
              padding: "8x",
              borderRadius: "8px",
              cursor: "pointer",
              p: 1,
              fontSize: "20px",
              ":hover": { color: "primary.dark" },
            }}
          >
            {categorySearch[0].toUpperCase() + categorySearch.slice(1)}
          </Box>
        </BasicMenu>
      )}
    </Box>
  );
}
