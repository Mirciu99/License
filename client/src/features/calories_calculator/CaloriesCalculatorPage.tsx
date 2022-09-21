import {
    Button,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function CaloriesCalculatorPage() {
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [gender, setGender] = useState("2");
    const [bmr, setBmr] = useState("1.2");
    const [result, setResult] = useState(0);

    const ageN = parseInt(age);
    const heightN = parseInt(height);
    const weightN = parseInt(weight);
    const genderN = parseInt(gender);
    const bmrN = parseFloat(bmr);
    const { t }: { t: any } = useTranslation();

    const handleSubmit = () => {
        let x = 0;
        if (genderN === 1) {
            x =
                (66.47 + 13.75 * weightN + 5.003 * heightN - 6.755 * ageN) *
                bmrN;
            setResult(Math.round(x));
        } else {
            x =
                (655.1 + 9.563 * weightN + 1.85 * heightN - 4.676 * ageN) *
                bmrN;
            setResult(Math.round(x));
        }
    };
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <Typography variant="h3" textAlign="center">
                        {t("Calories.1")}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        name="age"
                        label={t("Calories.2")}
                        autoComplete="given-name"
                        variant="standard"
                        onChange={(e) => setAge(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        name="height"
                        label={t("Calories.3")}
                        autoComplete="given-name"
                        variant="standard"
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        name="weight"
                        label={t("Calories.4")}
                        autoComplete="given-name"
                        variant="standard"
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <h4>{t("Calories.5")}</h4>
                    <RadioGroup
                        defaultValue="2"
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label={t("Calories.6")}
                        />
                        <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label={t("Calories.7")}
                        />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h4>{t("Calories.8")}</h4>
                    <RadioGroup
                        defaultValue="1.2"
                        onChange={(e) => setBmr(e.target.value)}
                    >
                        <FormControlLabel
                            value="1.2"
                            control={<Radio />}
                            label={t("Calories.9")}
                        />
                        <FormControlLabel
                            value="1.375"
                            control={<Radio />}
                            label={t("Calories.10")}
                        />
                        <FormControlLabel
                            value="1.55"
                            control={<Radio />}
                            label={t("Calories.11")}
                        />
                        <FormControlLabel
                            value="1.725"
                            control={<Radio />}
                            label={t("Calories.12")}
                        />
                        <FormControlLabel
                            value="1.9"
                            control={<Radio />}
                            label={t("Calories.13")}
                        />
                        <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label={t("Calories.14")}
                        />
                    </RadioGroup>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-end",
                    }}
                >
                    <Button
                        type="submit"
                        variant="outlined"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSubmit}
                    >
                        {t("Calories.15")}
                    </Button>
                </Grid>

                <h4>{t("Calories.16")} </h4>
                <Grid item xs={12} sm={3}>
                    <h4>{t("Calories.17")}</h4>
                    <TextField
                        required
                        disabled
                        name="weight-loss"
                        value={result === 0 ? 0 : result - 300}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <h4>{t("Calories.18")}</h4>
                    <TextField
                        required
                        disabled
                        name="maintain-weight"
                        value={result}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <h4>{t("Calories.19")}</h4>
                    <TextField
                        required
                        disabled
                        value={result === 0 ? 0 : result + 400}
                        name="muscle-gain"
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </>
    );
}
