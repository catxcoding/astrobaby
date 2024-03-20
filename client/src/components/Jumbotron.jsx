
import { Box } from "@mui/material";

function Jumbotron({ children }) {
    return (
        <Box
            sx={{
                height: 560,
                clear: "both",
                paddingTop: 120,
                textAlign: "center",
            }}
        >
            {children}
        </Box>
    );
}

export default Jumbotron;
