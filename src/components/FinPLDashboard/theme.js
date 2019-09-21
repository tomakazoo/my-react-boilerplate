export default theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  chips: {
    fullWidth: true,
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  inputlabel: {
    padding: "0px 0px 0px 10px"
  },
  MuiTableCell: {
    body: {
      padding: "0px"
    }
  }
});
