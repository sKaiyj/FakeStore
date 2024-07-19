import { Box } from "@mui/material";

const CardImg = ({ src, height }: { src: string; height: number }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
      <img src={src} height={height} alt='cardImg' />
    </Box>
  );
};

export default CardImg;
