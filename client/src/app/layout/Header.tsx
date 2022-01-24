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

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const midLinks = [
    { title: "Catalog", path: "/catalog" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
];

const subMenu = [
    { title: "Calories Calculator", path: "/calories_calculator" },
    { title: "Carb Cycling Calculator", path: "/carbs_cycling_calculator" },
];

const rightLinks = [
    { title: "Login", path: "/login" },
    { title: "Register", path: "/register" },
];

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

export default function Header({ darkMode, handleThemeChange }: Props) {
    const { basket } = useAppSelector((state) => state.basket);
    const itemCount = basket?.items.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

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
                        Gym Store
                    </Typography>
                    <Switch checked={darkMode} onChange={handleThemeChange} />
                </Box>

                <Box textTransform="none">
                    <List sx={{ display: "flex" }}>
                        {midLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title}
                            </ListItem>
                        ))}
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
                                Calculators
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
                                {subMenu.map(({ title, path }) => (
                                    <MenuItem
                                        onClick={handleClose}
                                        component={NavLink}
                                        to={path}
                                        key={path}
                                        sx={navStyles}
                                    >
                                        {title}
                                    </MenuItem>
                                ))}
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

                    <List sx={{ display: "flex" }}>
                        {rightLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
