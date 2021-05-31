import React, { memo, useCallback } from 'react'
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Nationality } from '../constants/nationality'
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            padding: '10px',
            marginBottom: theme.spacing(3),
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0px 0px 6px 2px rgb(0 0 0 / 15%)'
        },
        formSearch: {
            width: '60%'
        },
        formSelect: {
            width: '20%',
            marginLeft: theme.spacing(1)
        }
    }),
);

interface ContactsFiltersProps {
    filters: any
    setFilters: (e: any) => void
    clearFilters: () => void
}

export const ContactsFilters = memo((props: ContactsFiltersProps) => { 
    const classes = useStyles()

    const handleChangeFilter = (event: any) => {
        const { name, value } = event.target
        props.setFilters((prevEvent: any) => ({
            ...prevEvent,
            [name]: value
        }))
    }

    return (
        <form noValidate autoComplete="off" className={classes.form}>
            <Box display='flex' justifyContent='space-between' width='80%'>
                <TextField
                    className={classes.formSearch}
                    name="fullname"
                    size="small"
                    label="Search by full name"
                    variant="outlined"
                    value={props.filters.fullname}
                    onChange={handleChangeFilter}
                />

                <FormControl size="small" variant="outlined" className={classes.formSelect}>
                    <InputLabel id="gender">Gender</InputLabel>
                    <Select
                        name='gender'
                        labelId="gender"
                        value={props.filters.gender}
                        onChange={handleChangeFilter}
                        label="Gender"
                    >
                        <MenuItem value='all'>All</MenuItem>
                        <MenuItem value='male'>Male</MenuItem>
                        <MenuItem value='female'>Female</MenuItem>
                    </Select>
                </FormControl>

                <FormControl size="small" variant="outlined" className={classes.formSelect}>
                    <InputLabel id="nationality">Nationality</InputLabel>
                    <Select
                        name='nationality'
                        labelId="nationality"
                        value={props.filters.nationality}
                        onChange={handleChangeFilter}
                        label="Nationality"
                    >
                        <MenuItem value='all'>All</MenuItem>
                        {Object.entries(Nationality).map(([key, country]) => {
                            return <MenuItem key={key} value={key}>{country}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Box>

            <Box>
                <Button
                    size='small'
                    startIcon={<ClearIcon />}
                    onClick={props.clearFilters}
                    children='Clear All'
                />
            </Box>
        </form>
    )
})