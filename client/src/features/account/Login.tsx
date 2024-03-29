import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch } from "../../app/store/configureStore";
import { signInUser } from "./accountSlice";
import { useTranslation } from "react-i18next";

const theme = createTheme();

export default function Login() {
    const history = useHistory();
    const location = useLocation<any>();
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors, isValid },
    } = useForm({
        mode: "all",
    });
    const { t } = useTranslation();

    async function submitForm(data: FieldValues) {
        await dispatch(signInUser(data));
        history.push(location.state?.from?.pathname || "/catalog");
    }
    return (
        <ThemeProvider theme={theme}>
            <Container
                component={Paper}
                maxWidth="sm"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 4,
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {t("Login.1")}
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(submitForm)}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin="normal"
                        fullWidth
                        label={t("Login.2")}
                        {...register("username", {
                            required: "Username is required",
                        })}
                        error={!!errors.username}
                        helperText={errors?.username?.message}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        label={t("Login.3")}
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                        })}
                        error={!!errors.password}
                        helperText={errors?.password?.message}
                    />

                    <LoadingButton
                        loading={isSubmitting}
                        disabled={!isValid}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {t("Login.4")}
                    </LoadingButton>
                    <Grid container>
                        <Grid item>
                            <Link to="/register">{t("Login.5")}</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
