import { Button, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// interface Props {
//     handleClickLang: (val: string) => void;
// }

export default function HomePage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const { t } = useTranslation();
    return (
        <>
            <Slider {...settings}>
                <div>
                    <img
                        src="/images/hero3.jpg"
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
                <Typography variant="h1">{t("Home.1")}</Typography>
            </Box>
            <Stack
                spacing={2}
                direction="row"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Button variant="outlined" component={Link} to="/catalog">
                    {t("Home.2")}
                </Button>
                <Button
                    variant="outlined"
                    component={Link}
                    to="/calories_calculator"
                >
                    {t("Home.3")}
                </Button>
                <Button variant="outlined" component={Link} to="/login">
                    {t("Home.4")}
                </Button>
            </Stack>
            <br />
            <br />
            <br />
        </>
    );
}
