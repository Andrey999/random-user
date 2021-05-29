import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

const FiltersDefaultValue = { 
    fullname: ''
}

export const FilterFullNameSearch = () => {
    const classes = useStyles()
    const [filters, setFilters] = useState(FiltersDefaultValue)

    const handleChangeFilter = (event: any) => {
        const { name, value } = event.target
        setFilters((prevEvent) => ({    
            ...prevEvent,
            [name]: value
        }))
    }

    return (
        <form noValidate autoComplete="off">
            <TextField
                name="fullname"
                size="small"
                label="Search by full name"
                variant="outlined"
                value={filters.fullname}
                onChange={handleChangeFilter}
            />

            {/* <FormControl size="small" variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={age}
                    // onChange={handleChange}
                    label="Gender"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <TextField
                size="small"
                label="Nationality"
                variant="outlined"
                name="nationality"
                value={filters.nationality}
                onChange={handleChangeFilter}
            /> */}
        </form>
    )
}