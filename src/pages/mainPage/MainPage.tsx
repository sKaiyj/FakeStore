import { Box, Typography } from "@mui/material";
import imgUrl from "../../imgs/mainImg.png";
const MainPage = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        margin: "30px 0px",
        flexDirection: { xs: "column", sm: "column", md: "row" },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography
          variant='h4'
          sx={{ color: "#CFC5C5", mt: { sm: 2, md: 10 } }}
        >
          Welcome to our FakeStore
        </Typography>
        <Typography sx={{ color: "#CFC5C5" }}>
          A wide selection of clothing, electronics, household appliances and
          computer accessories. Ease of ordering and convenience for you.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          margin: "0 auto",
          maxWidth: { sm: "80%", md: "50%" },
          mt: 5,
        }}
      >
        <img src={imgUrl} alt='img' style={{ width: "100%", maxHeight:500, }} />
      </Box>
    </Box>
  );
};

export default MainPage;
