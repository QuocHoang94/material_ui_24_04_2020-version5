import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    color:{
        primary:"#032F2F",
        secondary:"#00BCD4",
        error:"#F44336"
    },
    typography:{
        fontFamily:"Roboto"
    },
    shape:{
        borderRadius:4,
        background:"#757575",
        textColor:"#FFFFFF",
        border:"#CCCCCC"
    }
});
export default theme;