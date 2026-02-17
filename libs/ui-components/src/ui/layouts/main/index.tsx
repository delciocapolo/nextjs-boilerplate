import { ReactNode } from "react";
import { Grid } from "@mui/material";

type LayoutPageProps = {
    children: ReactNode;
}

export function LayoutPage({children}: LayoutPageProps) {
    return (
        <Grid>
            {children}
        </Grid>
    );
}
