export const user = {
  addIcon: {
    position: "fixed",
    bottom: 20,
    right: 10
  }
};

export const addRecord = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
    height: "115px",
    minWidth: "100px",
    overflowY: "auto"
  },
  textField: {
    marginLeft: "1.5%",
    marginRight: "1.5%",
    width: "22%",
    minWidth: 100
  },
  form: {
    flexDirection: "row"
  }
});

export const editRecord = {
  textField: {
    margin: "1.5%",
    width: 200
  }
};

export const recordsTable = () => ({
  tableWrapper: {
    overflowX: "auto",
    marginTop: "20px"
  }
});

export const titles = theme => ({
  headingContainer: {
    backgroundColor: "#3f51b5",
    marginTop: theme.spacing(3)
  },
  heading: {
    marginLeft: theme.spacing(3),
    color: "#ffff"
  }
});
