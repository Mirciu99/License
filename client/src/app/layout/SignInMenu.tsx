import { Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { signOut } from "../../features/account/accountSlice";
import { clearBasket } from "../../features/basket/BasketSlice";
import { useAppDispatch, useAppSelector } from "../store/configureStore";

export default function SignInMenu() {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.account);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const { t } = useTranslation();

    return (
        <>
            <Button
                color="inherit"
                onClick={handleClick}
                sx={{ typography: "h6" }}
            >
                {user?.email}
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                <MenuItem component={Link} to="orders">
                    {t("Profile.1")}
                </MenuItem>
                <MenuItem
                    component={Link}
                    to={"./"}
                    onClick={() => {
                        dispatch(signOut());
                        dispatch(clearBasket());
                    }}
                >
                    {t("Profile.2")}
                </MenuItem>
            </Menu>
        </>
    );
}
