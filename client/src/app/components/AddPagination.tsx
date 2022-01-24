import { Box, Typography, Pagination } from "@mui/material";
import { MetaData } from "../models/paginations";

interface Props {
    metaData: MetaData;
    onPageChange: (page: number) => void;
}

export default function AddPagination({ metaData, onPageChange }: Props) {
    const { currentPage, totalCount, totalPages, pageSize } = metaData;
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography>
                Display {(currentPage - 1) * pageSize + 1} -{" "}
                {currentPage * pageSize > totalCount
                    ? totalCount
                    : currentPage * pageSize}{" "}
                from {totalCount} items
            </Typography>
            <Pagination
                color="secondary"
                size="large"
                count={totalPages}
                page={currentPage}
                onChange={(e, page) => onPageChange(page)}
            />
        </Box>
    );
}
