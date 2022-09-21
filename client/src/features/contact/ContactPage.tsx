import { GarageTwoTone } from "@mui/icons-material";
import {
    Box,
    Button,
    Grid,
    TextareaAutosize,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
    const [data, setData] = useState({});
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            firstName: data.get("firstName"),
            emailAddress: data.get("emailAddress"),
            company: data.get("company"),
            message: data.get("message"),
        });
    };
    const { t } = useTranslation();
    console.log(data);

    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <Typography variant="h3" textAlign="center">
                            {t("Contact.4")}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label={t("Contact.1")}
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="emailAddress"
                            name="emailAddress"
                            label={t("Contact.2")}
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="company"
                            name="company"
                            label={t("Contact.3")}
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={1}
                            placeholder={t("Contact.5")}
                            style={{ width: 600, height: 300 }}
                            required
                            name="message"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} sx={{ textAlign: "right" }}>
                        <Button
                            type="submit"
                            variant="outlined"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {t("Contact.6")}
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
