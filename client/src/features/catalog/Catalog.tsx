import { FormGroup, FormLabel, Grid, Paper } from "@mui/material";
import { useEffect } from "react";
import AddPagination from "../../app/components/AddPagination";
import CheckboxButtons from "../../app/components/CheckboxButtons";
import RadioButtonGroup from "../../app/components/RadioButtonGroup";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import {
    fetchFilters,
    fetchProductsAsync,
    productSelectors,
    setPageNumber,
    setProductParams,
} from "./catalogSlice";
import ProductList from "./ProductList";
import ProductSeacrh from "./ProductSeach";

const sortOptions = [
    { value: "name", label: "Alphabetical" },
    { value: "priceDesc", label: "Price - High to low" },
    { value: "price", label: "Price - Low to high" },
];

export default function Catalog() {
    const products = useAppSelector(productSelectors.selectAll);
    const {
        productsLoaded,
        filtersLoaded,
        brands,
        types,
        productParams,
        metaData,
    } = useAppSelector((state) => state.catalog);
    const dispatch = useAppDispatch();

    console.log(products);

    useEffect(() => {
        if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded, dispatch]);

    useEffect(() => {
        if (!filtersLoaded) dispatch(fetchFilters());
    }, [dispatch, filtersLoaded]);

    if (!filtersLoaded)
        return <LoadingComponent message="Loading products..." />;

    return (
        <Grid container columnSpacing={4}>
            <Grid item xs={3}>
                <Paper>
                    <ProductSeacrh />
                </Paper>
                <Paper sx={{ md: 2, p: 2 }}>
                    <RadioButtonGroup
                        selectedValue={productParams.orderBy}
                        options={sortOptions}
                        onChange={(e) =>
                            dispatch(
                                setProductParams({ orderBy: e.target.value })
                            )
                        }
                    />
                </Paper>
                <Paper sx={{ md: 2, p: 2 }}>
                    <FormLabel>Filter by brand</FormLabel>
                    <CheckboxButtons
                        items={brands}
                        checked={productParams.brands}
                        onChange={(items: string[]) =>
                            dispatch(setProductParams({ brands: items }))
                        }
                    />
                </Paper>
                <Paper sx={{ md: 2, p: 2 }}>
                    <FormGroup>
                        <FormLabel>Filter by type</FormLabel>
                        <CheckboxButtons
                            items={types}
                            checked={productParams.types}
                            onChange={(items: string[]) =>
                                dispatch(setProductParams({ types: items }))
                            }
                        />
                    </FormGroup>
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <ProductList products={products} />
            </Grid>
            <Grid item xs={3} />
            <Grid item xs={9} sx={{ mb: 2, mt: 2 }}>
                {metaData && (
                    <AddPagination
                        metaData={metaData}
                        onPageChange={(page: number) =>
                            dispatch(setPageNumber({ pageNumber: page }))
                        }
                    />
                )}
            </Grid>
        </Grid>
    );
}
