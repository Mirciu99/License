import { ShoppingCart } from "@mui/icons-material";
import {
    AppBar,
    Badge,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuItem,
    Switch,
    Toolbar,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
import SignInMenu from "./SignInMenu";
import { useTranslation } from "react-i18next";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
    handleClickLang: (val: string) => void;
}

// const midLinks = [
//     { title: "Catalog", path: "/catalog" },
//     { title: "About", path: "/about" },
//     { title: "Contact", path: "/contact" },
// ];

// const subMenu = [
//     { title: "Calories Calculator", path: "/calories_calculator" },
//     // { title: "Carb Cycling Calculator", path: "/carbs_cycling_calculator" },
// ];

// const rightLinks = [
//     { title: "Login", path: "/login" },
//     { title: "Register", path: "/register" },
// ];

const navStyles = [
    {
        color: "inherit",
        typography: "h6",
        textDecoration: "none",
        "&:hover": { color: "grey.500" },
        "&.active": {
            color: "text.secondary",
        },
    },
];

export default function Header({
    darkMode,
    handleThemeChange,
    handleClickLang,
}: Props) {
    const { basket } = useAppSelector((state) => state.basket);
    const { user } = useAppSelector((state) => state.account);
    const itemCount = basket?.items.reduce(
        (sum, item) => sum + item.quantity,
        0
    );
    const { t, i18n } = useTranslation();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box display="flex" alignItems="center">
                    <Typography
                        variant="h5"
                        component={NavLink}
                        to={"/"}
                        exact
                        sx={navStyles}
                    >
                        GYMARK
                    </Typography>
                    <Switch checked={darkMode} onChange={handleThemeChange} />
                    <Button
                        sx={{ color: "white" }}
                        onClick={() => handleClickLang("en")}
                    >
                        English
                    </Button>
                    <Button
                        sx={{ color: "white" }}
                        onClick={() => handleClickLang("ro")}
                    >
                        Romanian
                    </Button>
                </Box>

                <Box textTransform="none">
                    <List sx={{ display: "flex" }}>
                        {/* {midLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title}
                            </ListItem>
                        ))} */}
                        <ListItem
                            component={NavLink}
                            to="/catalog"
                            key="/catalog"
                            sx={navStyles}
                        >
                            {t("Nav-Title.1.0")}
                        </ListItem>
                        <ListItem
                            component={NavLink}
                            to="/about"
                            key="/about"
                            sx={navStyles}
                        >
                            {t("Nav-Title.1.1")}
                        </ListItem>
                        <ListItem
                            component={NavLink}
                            to="/contact"
                            key="/contact"
                            sx={navStyles}
                        >
                            {t("Nav-Title.1.2")}
                        </ListItem>
                        <ListItem>
                            <Button
                                id="basic-button"
                                aria-controls={open ? "basic-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={handleClick}
                                sx={{
                                    textTransform: "none",
                                    color: "inherit",
                                    typography: "h6",
                                    textDecoration: "none",
                                    "&:hover": { color: "grey.500" },
                                    "&.active": {
                                        color: "text.secondary",
                                    },
                                }}
                                size="small"
                            >
                                Calculator
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    "aria-labelledby": "basic-button",
                                }}
                            >
                                {/* {subMenu.map(({ title, path }) => (
                                    <MenuItem
                                        onClick={handleClose}
                                        component={NavLink}
                                        to={path}
                                        key={path}
                                        sx={navStyles}
                                    >
                                        {title}
                                    </MenuItem>
                                ))} */}
                                <MenuItem
                                    onClick={handleClose}
                                    component={NavLink}
                                    to="/calories_calculator"
                                    key="/calories_calculator"
                                    sx={navStyles}
                                >
                                    {t("Calculator.1")}
                                </MenuItem>
                            </Menu>
                        </ListItem>
                    </List>
                </Box>

                <Box display="flex" alignItems="center">
                    <IconButton
                        component={Link}
                        to={"/basket"}
                        size="large"
                        sx={{ color: "inherit" }}
                    >
                        <Badge badgeContent={itemCount} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    {user ? (
                        <SignInMenu />
                    ) : (
                        <List sx={{ display: "flex" }}>
                            {/* {rightLinks.map(({ title, path }) => (
                                <ListItem
                                    component={NavLink}
                                    to={path}
                                    key={path}
                                    sx={navStyles}
                                >
                                    {title}
                                </ListItem>
                            ))} */}
                            <ListItem
                                component={NavLink}
                                to="/login"
                                key="/login"
                                sx={navStyles}
                            >
                                {t("Authentificare.1")}
                            </ListItem>
                            <ListItem
                                component={NavLink}
                                to="/register"
                                key="/register"
                                sx={navStyles}
                            >
                                {t("Authentificare.2")}
                            </ListItem>
                        </List>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
