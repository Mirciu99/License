import { LoadingButton } from "@mui/lab";
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { currencyFormat } from "../../app/util/util";
import { addBasketItemAsync } from "../basket/BasketSlice";

interface Props {
    product: Product;
}

export default function ProductCart({ product }: Props) {
    const { status } = useAppSelector((state) => state.basket);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "secondary.main" }}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx: { fontWeight: "bold", color: "primary.main" },
                }}
            />
            <CardMedia
                component="img"
                sx={{
                    height: 200,
                    objectFit: "contain",
                    backgroundPosition: "center",
                }}
                image={product.pictureUrl}
                alt="Something is missing"
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom color="secundary" variant="h5">
                    {currencyFormat(product.price)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <LoadingButton
                    loading={status.includes("pendingAddItem" + product.id)}
                    onClick={() =>
                        dispatch(addBasketItemAsync({ productId: product.id }))
                    }
                    size="small"
                >
                    {t("Catalog.8")}
                </LoadingButton>
                <Button
                    component={Link}
                    to={`/catalog/${product.id}`}
                    size="small"
                >
                    {t("Catalog.9")}
                </Button>
            </CardActions>
        </Card>
    );
}
