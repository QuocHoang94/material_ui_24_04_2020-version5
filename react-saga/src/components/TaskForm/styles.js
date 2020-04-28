import { ThemeProvider } from "@material-ui/core";

const styles = (theme) => ({
    modal: {
        marginTop:'111px',
        left: '12%',
        transform: 'translate(50%,50%)',
        position:'absolute',
        width:400,
        backgroundColor:theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding:theme.spacing(2,4,4),
        outline:'none'
    },
    textField:{
        width:'100%'
    }
});
export default styles;