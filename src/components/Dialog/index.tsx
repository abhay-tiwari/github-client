import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";

import { CustomDialogProps } from "./types";

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
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomDialog;
