import React from "react";

import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Login from "./Login";
import Register from "./Register";
import { Link } from "react-router-dom";
import "./login.css";

/* tab changes */
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        
          <div>{children}</div>
        
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

/* modal changes */
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const ModalContainer = (props) => {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);


  //const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const body = (
    <div style={modalStyle} className="modalContainer">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="Login" {...a11yProps(0)} />
        <Tab label="Register" {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Login {...props} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Register {...props} />
      </TabPanel>
    </div>
  );

  return (
    <div>
      {props.bookShow? <Link to={"/bookshow/"+props.bookShow}>
            <Button variant="contained" color="primary">
                Book Show
            </Button>
            </Link>:""
          }  
      <Button variant="contained" onClick={handleOpen}>
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default ModalContainer;
