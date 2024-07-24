import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{ bgcolor: "primary.main", p: 1, mt: "auto", width: "100%" }}
      component='footer'
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 2,
          width: "100%",
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "16px",
            textAlign: "center",
          }}
        >
          Copyright © 2024. Danila Ionin.
        </p>
      </Box>
    </Box>
  );
};

export default Footer;
