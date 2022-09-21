import { Grid, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Image from "../about/about1.jpg";

export default function AboutPage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const { t } = useTranslation();
    return (
        <Grid container columnSpacing={22}>
            <Grid item xs={12}>
                <Typography
                    variant="h3"
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    {t("About.1")}
                </Typography>
                <br />
                <br />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h3">{t("About.2")}</Typography>
                <Typography variant="h6" sx={{ width: "600px" }}>
                    <br />
                    {t("About.3")}
                    <br />
                    <br />
                    {t("About.4")}
                    <br />
                    <br />
                    {t("About.5")}
                </Typography>
            </Grid>
            <Grid item xs={6} sx={{ mt: 12 }}>
                <img src={Image} alt="Something" width={860} height={620} />
            </Grid>
        </Grid>
    );
}
