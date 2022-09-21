import {
    TableContainer,
    Paper,
    Table,
    TableBody,
    TableRow,
    TableCell,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../app/store/configureStore";
import { currencyFormat } from "../../app/util/util";

interface Props {
    subtotal?: number;
}

export default function BasketSummary({ subtotal }: Props) {
    const { basket } = useAppSelector((state) => state.basket);
    const { t } = useTranslation();
    if (subtotal === undefined)
        subtotal =
            basket?.items.reduce(
                (sum, item) => sum + item.quantity * item.price,
                0
            ) ?? 0;
    const deliveryFee = subtotal > 10000 ? 0 : 500;

    return (
        <>
            <TableContainer component={Paper} variant={"outlined"}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={2}>{t("Checkout.1")}</TableCell>
                            <TableCell align="right">
                                {currencyFormat(subtotal)}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>{t("Checkout.2")}</TableCell>
                            <TableCell align="right">
                                {currencyFormat(deliveryFee)}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>{t("Checkout.3")}</TableCell>
                            <TableCell align="right">
                                {currencyFormat(subtotal + deliveryFee)}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span style={{ fontStyle: "italic" }}>
                                    *{t("Checkout.4")}
                                </span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
