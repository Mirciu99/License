// import {
//     Button,
//     FormControlLabel,
//     Grid,
//     Radio,
//     RadioGroup,
//     TextField,
//     Typography,
// } from "@mui/material";
// import { useState } from "react";

export default function CarbsCyclingCalculator() {
    // const [age, setAge] = useState("");
    // const [height, setHeight] = useState("");
    // const [weight, setWeight] = useState("");
    // const [gender, setGender] = useState("2");
    // const [bmr, setBmr] = useState("1.2");
    // const [sensitive, setSensitive] = useState("2");
    // const [goal, setGoal] = useState("2");
    // const [resultCaloriesH, setResultCaloriesH] = useState(0);
    // const [resultCaloriesM, setResultCaloriesM] = useState(0);
    // const [resultCaloriesL, setResultCaloriesL] = useState(0);

    // const ageN = parseInt(age);
    // const heightN = parseInt(height);
    // const weightN = parseInt(weight);
    // const genderN = parseInt(gender);
    // const sensitiveN = parseInt(sensitive);
    // const bmrN = parseFloat(bmr);
    // const high = 0.5;
    // const mid = 0.2;
    // const low = 0.25;

    // const handleSubmit = () => {
    //     let x = 0;
    //     let y = 0;
    //     let z = 0;
    //     if (genderN == 1) {
    //         x =
    //             ((66.47 + 13.75 * weightN + 5.003 * heightN - 6.755 * ageN) *
    //                 bmrN *
    //                 high) /
    //             4;
    //         y = x - x * mid;
    //         z = y - y * low;
    //         setResultCaloriesM(Math.round(y));
    //         setResultCaloriesH(Math.round(x));
    //         setResultCaloriesL(Math.round(z));
    //     } else {
    //         x =
    //             ((655.1 + 9.563 * weightN + 1.85 * heightN - 4.676 * ageN) *
    //                 bmrN *
    //                 high) /
    //             4;
    //         y = x - x * mid;
    //         z = y - y * low;
    //         setResultCaloriesM(Math.round(y));
    //         setResultCaloriesH(Math.round(x));
    //         setResultCaloriesL(Math.round(z));
    //     }

    //     console.log(resultCaloriesH, resultCaloriesM, resultCaloriesL);
    // };
    return (
        <>
            {/* <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <Typography variant="h3" textAlign="center">
                        Calories Calculator
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        name="age"
                        label="Age"
                        autoComplete="given-name"
                        variant="standard"
                        onChange={(e) => setAge(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        name="height"
                        label="Height(cm)"
                        autoComplete="given-name"
                        variant="standard"
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        name="weight"
                        label="Weight(kg)"
                        autoComplete="given-name"
                        variant="standard"
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h4>Gender</h4>
                    <RadioGroup
                        defaultValue="2"
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Female"
                        />
                        <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Male"
                        />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h4>Goal</h4>
                    <RadioGroup
                        defaultValue="2"
                        onChange={(e) => setGoal(e.target.value)}
                    >
                        <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Fat Loss"
                        />
                        <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Moderate Fat Loss"
                        />
                        <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label="Extreme Fat Loss"
                        />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h4>Basal Metabolic Rate(BMR)</h4>
                    <RadioGroup
                        defaultValue="1.2"
                        onChange={(e) => setBmr(e.target.value)}
                    >
                        <FormControlLabel
                            value="1.2"
                            control={<Radio />}
                            label="Sedentary: little or no exercise"
                        />
                        <FormControlLabel
                            value="1.375"
                            control={<Radio />}
                            label="Light: exercise 1-3 times / week"
                        />
                        <FormControlLabel
                            value="1.55"
                            control={<Radio />}
                            label="Moderate: exercise 4-5 times / week"
                        />
                        <FormControlLabel
                            value="1.725"
                            control={<Radio />}
                            label="Active daily exercise or intense exercise 3-4 times
                                / week"
                        />
                        <FormControlLabel
                            value="1.9"
                            control={<Radio />}
                            label="Very Active: intense exercise 6-7 times / week"
                        />
                        <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Extra Active: very intense exercise daily, or
                                physical job"
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
                        Calculate
                    </Button>
                </Grid>
            </Grid> */}
        </>
    );
}
