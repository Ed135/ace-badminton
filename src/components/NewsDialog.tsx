import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function NewsDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Temporary Club Night Closure"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Club night is temporarily closed on Wednesday 18th and 25th May and will resume on Wednesday 1st June.
           There will be a new venue for club nights in June so look out for emails on this.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Dismiss
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
