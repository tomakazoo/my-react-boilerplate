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
  fab: {
    margin: theme.spacing(1)
  },
  fixedHeight: {
    height: 85
  }
});
