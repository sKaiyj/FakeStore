import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import React, { useEffect } from "react";

const MyModal = ({ open }: { open: boolean }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleClose = () => setOpenModal(false);
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
            width: 400,
            bgcolor: "background.paper",
            border: "1px solid #777",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id='modal-modal-title' variant='h5' component='h2'>
            Added
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            You are added this product to your basket
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default MyModal;
