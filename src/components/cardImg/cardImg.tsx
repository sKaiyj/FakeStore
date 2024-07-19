import { Box } from "@mui/material";

const CardImg = ({
  src,
  height,
  width,
}: {
  src: string;
  height?: number;
  width?: number;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 2,
        width: "100%",
        maxWidth: width,
        margin: "0 auto",
      }}
    >
      <img
        src={src}
        height={height}
        alt='cardImg'
        style={{ maxWidth: "100%", objectFit: "contain" }}
      />
    </Box>
  );
};

export default CardImg;
