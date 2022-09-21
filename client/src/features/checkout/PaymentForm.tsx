import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useFormContext } from "react-hook-form";
import AppTextInput from "../../app/components/AppTextInput";
import {
    CardCvcElement,
    CardExpiryElement,
    CardNumberElement,
} from "@stripe/react-stripe-js";
import { StripeInput } from "./StripeInput";
import { StripeElementType } from "@stripe/stripe-js";
import { useTranslation } from "react-i18next";

interface Props {
    cardState: {
        elementError: { [key in StripeElementType]?: string };
    };
    onCardInputChange: (event: any) => void;
}

export default function PaymentForm({ cardState, onCardInputChange }: Props) {
    const { control } = useFormContext();
    const { t } = useTranslation();

    return (
        <>
            <Typography variant="h6" gutterBottom>
                {t("Payment.1")}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <AppTextInput
                        name="nameOnCard"
                        label={t("Payment.2")}
                        control={control}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        onChange={onCardInputChange}
                        error={!!cardState.elementError.cardNumber}
                        helperText={cardState.elementError.cardNumber}
                        id="cardNumber"
                        label={t("Payment.3")}
                        fullWidth
                        autoComplete="cc-number"
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                            inputComponent: StripeInput,
                            inputProps: {
                                component: CardNumberElement,
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        onChange={onCardInputChange}
                        error={!!cardState.elementError.cardExpiry}
                        helperText={cardState.elementError.cardExpiry}
                        id="expDate"
                        label={t("Payment.4")}
                        fullWidth
                        autoComplete="cc-exp"
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                            inputComponent: StripeInput,
                            inputProps: {
                                component: CardExpiryElement,
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        onChange={onCardInputChange}
                        error={!!cardState.elementError.cardCvc}
                        helperText={cardState.elementError.cardCvc}
                        id="cvv"
                        label="CVV"
                        fullWidth
                        autoComplete="cc-csc"
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                            inputComponent: StripeInput,
                            inputProps: {
                                component: CardCvcElement,
                            },
                        }}
                    />
                </Grid>
            </Grid>
        </>
    );
}
