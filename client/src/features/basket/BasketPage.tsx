import { Button, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/store/configureStore";
import BasketSummary from "./BasketSummary";
import BasketTable from "./BasketTable";

export default function BasketPage() {
    const { basket } = useAppSelector((state) => state.basket);
    const { t } = useTranslation();

    if (!basket) return <Typography variant="h3">{t("Cos.1")}</Typography>;

    return (
        <>
            <BasketTable items={basket.items} />
            <Grid container>
                <Grid item xs={6} />
                <Grid item xs={6}>
                    <BasketSummary />
                    <Button
                        component={Link}
                        to="/checkout"
                        variant="contained"
                        size="large"
                        fullWidth
                    >
                        {t("Diverse.1")}
                    </Button>
                </Grid>
            </Grid>
            <br></br>
            <br></br>
        </>
    );
}
