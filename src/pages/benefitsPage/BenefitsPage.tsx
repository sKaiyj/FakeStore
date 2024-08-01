import { Box, Typography } from "@mui/material";
import imgUrl from "../../imgs/benefitImg.png";

const BenefitsPage = () => {
  return (
    <Box
      sx={{
        color: "white",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        margin: "50px 0px",
      }}
    >
      <Box
        sx={{
          color: "white",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          margin: "auto 0",
        }}
      >
        <Typography
          variant='h4'
          sx={{
            textDecoration: "underline 1px white",
          }}
        >
          Advantages of FakeStore
        </Typography>
        <Typography variant='h5'>
          Feel the benefits of fast and convenient online shopping
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 4,
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              margin: 2,
            }}
          >
            <img src={imgUrl} height={60} width={60} />
            <Typography variant='h6'>Order without difficulties</Typography>
            <Typography>Fast and clear order processing</Typography>
          </Box>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              margin: 2,
            }}
          >
            <img src={imgUrl} height={60} width={60} />
            <Typography variant='h6'>Supersonic speed</Typography>
            <Typography>Instant processing and delivery of orders</Typography>
          </Box>{" "}
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              margin: 2,
            }}
          >
            <img src={imgUrl} height={60} width={60} />
            <Typography variant='h6'>Easy to use</Typography>
            <Typography>User friendly interface and easy to use</Typography>
          </Box>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              margin: 2,
            }}
          >
            <img src={imgUrl} height={60} width={60} />
            <Typography variant='h6'>High-Quality products</Typography>
            <Typography>We select only the highest quality goods</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BenefitsPage;
