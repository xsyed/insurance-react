import { Box, Typography, Modal } from '@mui/material';
import BuyForm from "./BuyForm";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '1px solid #f2f2f2',
    borderRadius:'5px',
    boxShadow: 24,
    p: 2,
    textAlign:'center',
  };

const BuyModal = ({insurance, open,bought,setOpen, setBought}) => {

    const handleClose = () => setOpen(false);

    return (
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="modalTitlte"
            aria-describedby="modalDescription"
            >
            <Box sx={style}>
                <Typography sx={{pt:1,pb:2}} id="modalTitlte" variant="h4" component="h2" >
                    Buyer Information
                </Typography>
                
                {
                    bought? 
                    <Typography id="modalDescription" variant="h5" component="h5" >
                        Thank you!! You have bought {insurance.name}
                    </Typography>
                    : 
                    <BuyForm insurance={insurance} changeBoughtState={setBought} />
                }
            </Box>
        </Modal>
    )
}

export default BuyModal