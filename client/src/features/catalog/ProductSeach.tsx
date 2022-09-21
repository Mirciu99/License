import { debounce, TextField } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { setProductParams } from "./catalogSlice";

export default function ProductSeacrh() {
    const { productParams } = useAppSelector((state) => state.catalog);
    const [searchTerm, setSearchTerm] = useState(productParams.searchTerm);
    const dispatch = useAppDispatch();

    const debouncerSearch = debounce((event: any) => {
        dispatch(setProductParams({ searchTerm: event.target.value }));
    }, 2000);
    const { t } = useTranslation();
    return (
        <TextField
            label={t("Catalog.1")}
            variant="outlined"
            fullWidth
            value={searchTerm || ""}
            onChange={(event) => {
                setSearchTerm(event.target.value);
                debouncerSearch(event);
            }}
        />
    );
}
