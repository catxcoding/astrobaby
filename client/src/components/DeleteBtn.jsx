import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function DeleteBtn(props) {
    return (
        <IconButton {...props} aria-label="delete" color="error">
            <DeleteIcon />
        </IconButton>
    );
}

export default DeleteBtn;
