import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

export default function SearchInput() {
  return (
    <Paper
      component='form'
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        maxWidth: 600,
        width: "100%",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label='menu'>
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search Fake Product'
        inputProps={{ "aria-label": "Search Fake Product" }}
      />
      <IconButton type='button' sx={{ p: "10px" }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
