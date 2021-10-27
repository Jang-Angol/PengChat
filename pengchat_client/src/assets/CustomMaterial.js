import { Button, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const CustomTextField = withStyles({
  root: {
    backgroundColor: "#FFFFFF",
    "& .MuiOutlinedInput-root": {
      paddingLeft: 15,
      paddingRight: 15,
      "&:hover fieldset": {
        borderColor: "#92BEFF",
      },
    },
    "& input:valid:focus + fieldset": {
      borderColor: "#92BEFF",
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
    },
    "& .MuiFormHelperText-contained": {
      marginTop: 0,
      width: "100%",
      backgroundColor: "#F4F4FF",
      textAlign: "center",
    },
  },
})(TextField);

const CustomButton = withStyles({
  root: {
    width: 100,
    color: "#FFFFFF",
    backgroundColor: "#92BEFF",
    "&:hover": { backgroundColor: "#92BEFF", borderColor: "#92B2FF" },
  },
})(Button);

export { CustomTextField, CustomButton };
