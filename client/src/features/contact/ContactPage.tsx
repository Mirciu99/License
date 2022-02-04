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
                            Contact Us
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
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
                            label="Email Address"
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="company"
                            name="company"
                            label="Company"
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={1}
                            placeholder="Message"
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
                            Submit the form
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
