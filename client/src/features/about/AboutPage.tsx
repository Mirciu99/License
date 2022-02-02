import { Grid, Paper, Typography } from "@mui/material";
import Image from "../about/about1.jpg";

export default function AboutPage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Grid container columnSpacing={22}>
            <Grid item xs={12}>
                <Typography
                    variant="h3"
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    About Us!
                </Typography>
                <br />
                <br />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h3">How did it all start?</Typography>
                <Typography variant="h6" sx={{ width: "600px" }}>
                    <br />
                    It all started when we decided to help people with problems
                    in the gym or people who needed a professional computer to
                    build muscle or lose weight.
                    <br />
                    <br />
                    We took the time to create a store that not only contains
                    supplements, but also computers so that people can document
                    themselves more and more and have much better results.
                    <br />
                    <br />
                    Our goal is to help people increase their self-confidence.
                </Typography>
            </Grid>
            <Grid item xs={6} sx={{ mt: 12 }}>
                <img src={Image} alt="Something" width={860} height={620} />
            </Grid>
        </Grid>
    );
}
