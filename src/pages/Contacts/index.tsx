import React, { useState, useEffect } from 'react';
import { useContacts } from "../../hooks/useContacts";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import { ContactsTable } from "../../components/ContactsTable";
import { ButtonChangeMode } from '../../components/ButtonChangeMode'
import { ViewMode } from '../../constants/viewModeEnum'
import { FilterFullNameSearch } from '../../components/FilterFullNameSearch'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        marginTop: theme.spacing(4),
    },
    headBox: {
        marginBottom: theme.spacing(3),
        display: 'flex',
        justifyContent: 'space-between'
    },
    filtersBox: {
        marginBottom: theme.spacing(3),
    },
    fieldGender: {
        width: '120px'
    }
}));

const FiltersDefaultValue = {
    fullname: '',
    gender: 'all',
    nationality: ''
}

export const Contacts = () => {
    const classes = useStyles()
    const contacts = useContacts()
    const [dataViewMode, setDataViewMode] = useState(localStorage.getItem('dataViewMode') || ViewMode.Table)
    const [filters, setFilters] = useState(FiltersDefaultValue)

    useEffect(() => {
        localStorage.setItem('dataViewMode', dataViewMode)
    }, [dataViewMode])

    const handleChangeFilter = (event: any) => {
        const { name, value } = event.target
        console.log(event)
        setFilters((prevEvent) => ({
            ...prevEvent,
            [name]: value
        }))
    }

    const searchByName = contacts.data.filter(c => c.name.first.toLowerCase().includes(filters.fullname.toLowerCase())
        || c.name.last.toLowerCase().includes(filters.fullname.toLowerCase()))
        .filter(g => {
            if(filters.gender === 'all') return true
            return g.gender === filters.gender
        })
        .filter(n => n.nat.toLowerCase().includes(filters.nationality.toLowerCase()))

    if (contacts.isLoading) {
        return <div>...loading</div>
    }

    if (contacts.isError) {
        return <div>...error</div>
    }

    return (
        <Container className={classes.root}>
            <Grid container>
                <Grid item xs={12} className={classes.headBox}>
                    <Typography variant="h5">
                        Contacts
                    </Typography>

                    <ButtonChangeMode
                        dataViewMode={dataViewMode}
                        setDataViewMode={setDataViewMode}
                    />
                </Grid>

                <Grid item xs={12} className={classes.filtersBox}>
                    {/* <FilterFullNameSearch /> */}
                    <form noValidate autoComplete="off">
                        <TextField
                            name="fullname"
                            size="small"
                            label="Search by full name"
                            variant="outlined"
                            value={filters.fullname}
                            onChange={handleChangeFilter}
                        />

                        <FormControl size="small" variant="outlined" className={classes.fieldGender}>
                            <InputLabel id="gender">Gender</InputLabel>
                            <Select
                                name='gender'
                                labelId="gender"
                                value={filters.gender}
                                onChange={handleChangeFilter}
                                label="Gender"
                            >
                                <MenuItem value='all'>All</MenuItem>
                                <MenuItem value='male'>Male</MenuItem>
                                <MenuItem value='female'>Female</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            name="nationality"
                            size="small"
                            label="Search by nationality"
                            variant="outlined"
                            value={filters.nationality}
                            onChange={handleChangeFilter}
                        />
                    </form>
                </Grid>

                <Grid item xs={12}>
                    {dataViewMode === ViewMode.Table ?
                        <ContactsTable data={searchByName} />
                        :
                        'this is grid'}
                </Grid>
            </Grid>
        </Container>
    )
}