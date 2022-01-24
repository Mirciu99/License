import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import { useAppSelector } from "../../app/store/configureStore";
import ProductCart from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

interface Props {
    products: Product[];
    //addProducts: () => void;
}

export default function ProductList({ products }: Props) {
    const { productsLoaded } = useAppSelector((state) => state.catalog);
    return (
        <Grid container spacing={4}>
            {products.map((product) => (
                <Grid item xs={4} key={product.id}>
                    {!productsLoaded ? (
                        <ProductCardSkeleton />
                    ) : (
                        <ProductCart product={product} />
                    )}
                </Grid>
            ))}
        </Grid>
    );
}
