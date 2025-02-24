import React from "react";
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { CustomDialogProps } from "./types";
import { styles } from "./styles";

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const CustomDialog = ({
  children,
  title,
  open,
  handleCloseDialog,
}: CustomDialogProps) => {
  const closeDialog = () => {
    if (handleCloseDialog) {
      handleCloseDialog();
    }
  };
  return (
    <div>
      <Dialog
        onClose={closeDialog}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="lg"
        PaperProps={{
          style: { minWidth: "600px" },
        }}
      >
        <DialogTitle id="customized-dialog-title" onClose={closeDialog}>
          {title}
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomDialog;
