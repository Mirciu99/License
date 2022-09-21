import { Remove, Add, Delete } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { BasketItem } from "../../app/models/basket";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { removeBasketItemAsync, addBasketItemAsync } from "./BasketSlice";

interface Props {
    items: BasketItem[];
    isBasket?: boolean;
}

export default function BasketTable({ items, isBasket = true }: Props) {
    const { status } = useAppSelector((state) => state.basket);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>{t("Basket.1")}</TableCell>
                        <TableCell align="right">{t("Basket.2")}</TableCell>
                        <TableCell align="center">{t("Basket.3")}</TableCell>
                        <TableCell align="right">{t("Basket.4")}</TableCell>
                        {isBasket && <TableCell align="right"></TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item) => (
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
                                {t("Basket.5") === "$"
                                    ? t("Basket.5") +
                                      (item.price / 100).toFixed(2)
                                    : ((item.price / 100) * 4.3).toFixed(2) +
                                      t("Basket.5")}
                            </TableCell>
                            <TableCell align="center">
                                {isBasket && (
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
                                )}

                                {item.quantity}
                                {isBasket && (
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
                                )}
                            </TableCell>
                            <TableCell align="right">
                                {t("Basket.5") === "$"
                                    ? t("Basket.5") +
                                      (
                                          (item.price / 100) *
                                          item.quantity
                                      ).toFixed(2)
                                    : (
                                          (item.price / 100) *
                                          item.quantity *
                                          4.3
                                      ).toFixed(2) + t("Basket.5")}
                                {/* {((item.price / 100) * item.quantity).toFixed(
                                    2
                                )} */}
                            </TableCell>
                            {isBasket && (
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
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
