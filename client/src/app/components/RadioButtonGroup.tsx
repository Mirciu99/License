import {
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from "@mui/material";
import { useTranslation } from "react-i18next";

interface Props {
    options: any[];
    onChange: (event: any) => void;
    selectedValue: string;
}

export default function RadioButtonGroup({
    options,
    onChange,
    selectedValue,
}: Props) {
    const { t } = useTranslation();
    return (
        <FormControl>
            <FormLabel>{t("Catalog.2")}</FormLabel>
            <RadioGroup onChange={onChange} value={selectedValue}>
                {options.map(({ value, label }) => (
                    <FormControlLabel
                        value={value}
                        control={<Radio />}
                        label={label}
                        key={value}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
}
