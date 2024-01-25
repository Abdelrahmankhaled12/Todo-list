import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux'
import { setFilter } from '../../store/filter';

export default function Filter() {
    
    const dispatch = useDispatch();

    return (
        <div>
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">Filter</InputLabel>
                <Select defaultValue="" id="grouped-select" label="Grouping" onChange={(e)=> dispatch(setFilter(e.target.value))}>
                    <MenuItem value={"all"}>All</MenuItem>
                    <MenuItem value={"complete"}>Completed</MenuItem>
                    <MenuItem value={"incomplete"}>Incompleted</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}