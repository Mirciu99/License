import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useFormContext } from "react-hook-form";
import AppTextInput from "../../app/components/AppTextInput";
import AppCheckbox from "../../app/components/AppCheckbox";
import { useTranslation } from "react-i18next";

export default function AddressForm() {
    const { control, formState } = useFormContext();

    const { t } = useTranslation();

    return (
        <>
            <Typography variant="h6" gutterBottom>
                {t("Adress.1")}
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <AppTextInput
                        control={control}
                        name="fullName"
                        label={t("Adress.2")}
                    />
                </Grid>
                <Grid item xs={12}>
                    <AppTextInput
                        control={control}
                        name="address1"
                        label={t("Adress.3")}
                    />
                </Grid>
                <Grid item xs={12}>
                    <AppTextInput
                        control={control}
                        name="address2"
                        label={t("Adress.4")}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput
                        control={control}
                        name="city"
                        label={t("Adress.5")}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput
                        control={control}
                        name="state"
                        label={t("Adress.6")}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput
                        control={control}
                        name="zip"
                        label={t("Adress.7")}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput
                        control={control}
                        name="country"
                        label={t("Adress.8")}
                    />
                </Grid>
                <Grid item xs={12}>
                    <AppCheckbox
                        disabled={!formState.isDirty}
                        name="saveAddress"
                        label={t("Adress.9")}
                        control={control}
                    />
                </Grid>
            </Grid>
        </>
    );
}
