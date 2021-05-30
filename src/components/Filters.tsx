import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Nationality } from '../constants/nationality'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        filtersBox: {
            marginBottom: theme.spacing(3),
        },
        fieldGender: {
            width: '200px',
            marginLeft: theme.spacing(2)
        }
    }),
);

interface FiltersProps {
    filters: any
    handleChangeFilter: (e: any) => void
}

export const Filters = (props: FiltersProps) => {
    const classes = useStyles()

    return (
        <form noValidate autoComplete="off">
            <TextField
                name="fullname"
                size="small"
                label="Search by full name"
                variant="outlined"
                value={props.filters.fullname}
                onChange={props.handleChangeFilter}
            />

            <FormControl size="small" variant="outlined" className={classes.fieldGender}>
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                    name='gender'
                    labelId="gender"
                    value={props.filters.gender}
                    onChange={props.handleChangeFilter}
                    label="Gender"
                >
                    <MenuItem value='all'>All</MenuItem>
                    <MenuItem value='male'>Male</MenuItem>
                    <MenuItem value='female'>Female</MenuItem>
                </Select>
            </FormControl>

            <FormControl size="small" variant="outlined" className={classes.fieldGender}>
                <InputLabel id="nationality">Nationality</InputLabel>
                <Select
                    name='nationality'
                    labelId="nationality"
                    value={props.filters.nationality}
                    onChange={props.handleChangeFilter}
                    label="Nationality"
                >
                    {Object.entries(Nationality).map(([key, country]) => {
                        return <MenuItem key={key} value={key}>{country}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </form>
    )
}