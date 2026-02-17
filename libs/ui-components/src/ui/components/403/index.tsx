import { Link } from "react-router-dom";
import { Box, Grid, Typography, Button } from "@mui/material";
import { colorConfigs } from "../../../config/pallete.js";

export function ForbiddenPage() {
    return (
        <Grid container component="main" sx={{ height: "80vh", width: "90vw", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <Box>
                <img src="/restricted-area.png" alt="Restricted Area" style={{ maxWidth: "40%", height: "auto" }} />
                <Typography variant="h1" sx={{ fontSize: "3rem", fontWeight: "500", color: colorConfigs.primary }}>
                    403
                </Typography>
                <Typography variant="h4" sx={{ mb: 2, color: colorConfigs.primary, fontSize: "22px" }}>
                    Acesso restrito
                </Typography>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="primary" disableElevation size="small">
                        Voltar para o início
                    </Button>
                </Link>
            </Box>
        </Grid>
    );
}
