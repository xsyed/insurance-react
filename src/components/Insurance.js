import { useContext, useState } from "react"
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { InsuranceContext } from '../context/InsuranceContext';
import BuyModal from "./BuyModal"

export default function Insurance() {
  const {insurances} = useContext(InsuranceContext);
  const rows = [...insurances]
  const [open, setOpen] = useState(false);
  const [bought, setBought] = useState(false)
  const [selectedInsurance, setSelectedInsurance] = useState({}) 
  
  
  const columns = [
    { field: 'id', headerName: 'Package', width: 90 },
    { field: 'insurerName', headerName: 'Insurer Name', width: 220 },
    { field: 'description', sortable: false,headerName: 'Description', width: 400,},
    {
      field: 'price',
      headerName: 'Price ($) / Month',
      type: 'number',
      width: 150,
    },
    {
      field: 'choose',
      headerName: 'Choose',
      sortable: false,
      width: 200,
      renderCell: (params) => {
          const onClick = (e) => {
              e.stopPropagation(); // don't select this row after clicking
      
              setOpen(true)
              let insurance = {
                id: params.row.id,
                name:params.row.insurerName,
                price:params.row.price,
              }
              setSelectedInsurance(insurance)
              setBought(false)
            };
          return <Button variant="outlined" onClick={onClick}>Select</Button>;
        }
    },
  ];

  return (
    <Box sx={{  width: '100%' }}>
      <DataGrid
        checkboxSelection={false}
        rows={rows}
        autoRowHeight={true}
        columns={columns}
        autoHeight={true}
      />
      <BuyModal setOpen={setOpen} 
          open={open} 
          bought={bought} 
          insurance={selectedInsurance} 
          setBought={setBought}/>
      
    </Box>
  );
}