import { useState } from "react"
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { Button, Typography,TextField,MenuItem } from '@mui/material';

const BuyForm = ({insurance, changeBoughtState}) => {
    const [email, setEmail] = useState("")
    const [age, setAge] = useState(null)
    const [gender, setGender] = useState("Male")

    const genders = [
        {
          value: 'Male',
          label: 'Male',
        },
        {
          value: 'Female',
          label: 'Female',
        },
        {
          value: 'Other',
          label: 'Other',
        }
    ];

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    
    const onChangeGender = (e) => {
        setGender(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        let data = {
          insuranceId: insurance.id,
          email,
          age,
          gender
        }
    
        fetch('http://www.example.com', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          console.log("Ok submitted")
        }).catch(err => {
          console.log("error response")
          changeBoughtState(true)
        })
    
      }

    return (
        <form onSubmit={onSubmit} validate="true">
            <TextField id="email" label="Email" variant="outlined" 
            onChange={handleEmail}
            value={email} required/>
            <br/><br/>
            <TextField
                id="gender"
                select
                label="Gender"
                value={gender}
                required
                onChange={onChangeGender}
            >
                {genders.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>)
                    )
                }
            </TextField>
            <br/><br/>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Date of Birth"
                    value={age}
                    onChange={(newValue) => {
                        setAge(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} required />}
                />
            </LocalizationProvider>
            <br/><br/>
            <Typography id="insuranceSelected" variant="p" component="p" >
                You have selected {insurance.name} ({insurance.price} $/month)
            </Typography>
            <br/><br/>
            <Button variant="contained" type="submit">Buy</Button>
        </form>
    )
}

export default BuyForm