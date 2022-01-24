import { Add, Delete, Remove } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
    Box,
    Button,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { addBasketItemAsync, removeBasketItemAsync } from "./BasketSlice";
import BasketSummary from "./BasketSummary";

export default function BasketPage() {
    const { basket, status } = useAppSelector((state) => state.basket);
    const dispatch = useAppDispatch();

    if (!basket)
        return <Typography variant="h3">Your basket is empty</Typography>;

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Subtotal</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {basket.items.map((item) => (
                            <TableRow
                                key={item.productId}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    <Box display="flex" alignItems="center">
                                        <img
                                            src={item.pictureUrl}
                                            alt={item.name}
                                            style={{
                                                height: 50,
                                                marginRight: 20,
                                            }}
                                        />
                                        <span>{item.name}</span>
                                    </Box>
                                </TableCell>
                                <TableCell align="right">
                                    ${(item.price / 100).toFixed(2)}
                                </TableCell>
                                <TableCell align="center">
                                    <LoadingButton
                                        loading={
                                            status ===
                                            "pendingRemoveItem" +
                                                item.productId +
                                                "rem"
                                        }
                                        color="error"
                                        onClick={() =>
                                            dispatch(
                                                removeBasketItemAsync({
                                                    productId: item.productId,
                                                    quantity: 1,
                                                    name: "rem",
                                                })
                                            )
                                        }
                                    >
                                        <Remove />
                                    </LoadingButton>

                                    {item.quantity}

                                    <LoadingButton
                                        loading={
                                            status ===
                                            "pendingAddItem" + item.productId
                                        }
                                        color="error"
                                        onClick={() =>
                                            dispatch(
                                                addBasketItemAsync({
                                                    productId: item.productId,
                                                })
                                            )
                                        }
                                    >
                                        <Add />
                                    </LoadingButton>
                                </TableCell>
                                <TableCell align="right">
                                    $
                                    {(
                                        (item.price / 100) *
                                        item.quantity
                                    ).toFixed(2)}
                                </TableCell>
                                <TableCell align="right">
                                    <LoadingButton
                                        loading={
                                            status ===
                                            "pendingRemoveItem" +
                                                item.productId +
                                                "del"
                                        }
                                        color="error"
                                        onClick={() =>
                                            dispatch(
                                                removeBasketItemAsync({
                                                    productId: item.productId,
                                                    quantity: item.quantity,
                                                    name: "del",
                                                })
                                            )
                                        }
                                    >
                                        <Delete />
                                    </LoadingButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
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
                        Checkout
                    </Button>
                </Grid>
            </Grid>
            <br></br>
            <br></br>
        </>
    );
}