import { makeStyles, withStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
// Table styling
export const useStyles = makeStyles({
    table: {
        minWidth: 650,
        border: "none !important",
        boxShadow: "none !important",
    },
});

// Table Head Styling apply
export const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#223866",
        color: "white",
        fontWeight: "bold",
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

// table Rows Styling
export const StyledTableRow = withStyles((theme) => ({
    root: {
        boxShadow: "1px 1px 3px rgba(0,0,0,.2)",
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
        "&:hover": {
            backgroundColor: "#d9e1f2 !important",
            cursor: "pointer",
        },
    },
}))(TableRow);

// table pagination styling
export const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));
