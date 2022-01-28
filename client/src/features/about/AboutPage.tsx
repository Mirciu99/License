import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Slider from "react-slick";

export default function AboutPage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <Slider {...settings}>
                <div>
                    <img
                        src="/images/about1.jpg"
                        alt="first"
                        style={{
                            display: "block",
                            width: "100%",
                            maxHeight: 500,
                        }}
                    />
                </div>
            </Slider>

            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
                <Typography variant="h1">Welcome to about page!</Typography>
            </Box>
        </>
    );
}
