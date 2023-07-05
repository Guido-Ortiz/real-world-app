import React from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    select: {
      border: '1px solid #1976d2',
      //borderRadius: theme.shape.borderRadius,
      //padding: theme.spacing(1),
    },
  }));

const SelectDate = () => {

    const classes = useStyles();

  
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Date</InputLabel>
      <Select
      className={classes.select}
        labelId="demo-select-small-label"
        id="demo-select-small"
        //value={age}
        label="Date"
        //onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem>Recent</MenuItem>
        <MenuItem>Past</MenuItem>
        
      </Select>
    </FormControl>
  );
}

export default SelectDate;