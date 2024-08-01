import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import React, { useEffect } from "react";

const MyModal = ({
  open,
  title,
  desciption,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  desciption: string;
  children?: React.ReactNode;
  onClose?: () => void;
}) => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleClose = () => {
    onClose !== undefined ? onClose() : null;
    setOpenModal(false);
  };
  useEffect(() => {
    setOpenModal(open);
  }, [open]);

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openModal}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 300, sm: 400, md: 600 },
            bgcolor: "background.paper",
            border: "1px solid #777",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id='modal-modal-title' variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {desciption}
          </Typography>
          {children}
        </Box>
      </Fade>
    </Modal>
  );
};

export default MyModal;
