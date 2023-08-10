import * as React from 'react';
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import UserApiService from './UserApiService';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function Nav(props) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  const [openn, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClosee = () => setOpen(false);
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Logout = () => {
    localStorage.clear();
    navigate("/login");
    toast.success("Successfully Logged out")
  };
  const deleteUser = (userId) => {
    UserApiService.deleteUser(userId).then((response) => {
      toast.info("deleted")
      navigate("/");
    }).catch(error => {
      if (error.response.data.status === 500) {
        console.log(error.response.data.message)
        toast.warning(error.response.data.message)
      }
      else {
        console.log(error)
        toast.warning(error.response.data)
      }
    })
  }
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
          style={{ color: "#eeedf0" }}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Options
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={() => navigate(`/user/update/${props.user.userId}`)}>Edit Details</MenuItem>
        <MenuItem 
        onClick={handleOpen} style={{ color: "#d13b47" }}>
             Delete account
        </MenuItem>
        <MenuItem onClick={Logout}>Logout</MenuItem>
      </Menu>

      <Modal
        open={openn}
        onClose={handleClosee}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you really want to delete your account?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ color: "#d13b47" }}>
            Please note that it cannot be undone!
            <br />
          <button onClick={() => deleteUser(props.user.userId)} 
          className="btn btn-danger">Delete Anyway</button>
          <button onClick={handleClosee} 
          className="btn btn-primary">Cancel</button>
          </Typography>
          
        </Box>
      </Modal>

    </div>
  );
}
export default Nav