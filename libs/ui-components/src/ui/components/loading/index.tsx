import { CircularProgress, Grid } from "@mui/material"

export function LoadingComponent() {
    return (
        <Grid
            container
            component="div"
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CircularProgress thickness={4} variant="indeterminate" size={"20px"} />
        </Grid>
    )
}
