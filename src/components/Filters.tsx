import React  from 'react'
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Nationality } from '../constants/nationality'
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import { ViewMode } from 'constants/viewModeEnum';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            marginBottom: theme.spacing(3),
            display: 'flex'
        },
        formSelect: {
            width: '200px',
            marginLeft: theme.spacing(2)
        }
    }),
);

interface FiltersProps {
    filters: any
    setFilters: (e: any) => void
    clearFilters: () => ViewMode
}

export const Filters = (props: FiltersProps) => {
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
            <TextField
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

            <Button size='small' startIcon={<ClearIcon />} onClick={props.clearFilters}>
                Clear All
            </Button>
        </form>
    )
}