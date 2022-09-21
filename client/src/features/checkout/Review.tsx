import { Grid, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/store/configureStore";
import BasketSummary from "../basket/BasketSummary";
import BasketTable from "../basket/BasketTable";

export default function Review() {
    const { basket } = useAppSelector((state) => state.basket);
    const { t } = useTranslation();
    return (
        <>
            <Typography variant="h6" gutterBottom>
                {t("Diverse.7")}
            </Typography>
            {basket && <BasketTable items={basket.items} isBasket={false} />}
            <Grid container>
                <Grid item xs={6} />
                <Grid item xs={6}>
                    <BasketSummary />
                </Grid>
            </Grid>
        </>
    );
}
