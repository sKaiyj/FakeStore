import { Box, Container, Typography } from "@mui/material";
import Slider from "react-slick";
import imgUrl from "../../imgs/photoRev.png";
const ReviewsPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container maxWidth='lg' sx={{ height: "100%" }}>
      <Box
        sx={{
          margin: "50px auto",
          width: { xs: 250, sm: 500, md: 760 },
        }}
      >
        <Slider {...settings}>
          {[...Array(5)].map((_) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <img
                style={{ borderRadius: "50%", margin: "20px auto" }}
                width={100}
                height={100}
                src={imgUrl}
              ></img>
              <Typography
                variant='h6'
                sx={{ color: "white", maxWidth: "900px", margin: "40px auto" }}
              >
                Great store! It is very convenient to use the site, quick
                orders. It's nice that you can leave a product rating. I
                recommend it to everyone!
              </Typography>
              <Typography sx={{ color: "white", margin: "40px auto" }}>
                Alexandra Lapteva
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default ReviewsPage;
