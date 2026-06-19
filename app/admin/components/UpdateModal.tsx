import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@/components/ui/button";

export const UpdateModal = ({
  open,
  handleClose,
  project,
}: {
  open: boolean;
  handleClose: () => void;
  project: Project;
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    p: 4,
    borderRadius: 2,
    backgroundColor: "white",
  };
  return  <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <div className="flex flex-col w-full items-center p-5 gap-4">
         <h1>hi</h1>
        </div>
      </Box>
    </Modal>;
};
