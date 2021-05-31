import React, { useState, useEffect } from 'react';
import { useContacts } from "../../hooks/useContacts";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import { ContactsTable } from "../../components/ContactsTable";
import { ButtonChangeMode } from '../../components/ButtonChangeMode'
import { ViewMode } from '../../constants/viewModeEnum'
import { Filters } from '../../components/Filters'

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
}));

const FiltersDefaultValue = {
    fullname: '',
    gender: 'all',
    nationality: 'all'
}

export const Contacts = () => {
    const classes = useStyles()
    const contacts = useContacts()
    const [dataViewMode, setDataViewMode] = useState(localStorage.getItem('dataViewMode') || ViewMode.Table)
    const [filters, setFilters] = useState(FiltersDefaultValue)

    useEffect(() => {
        localStorage.setItem('dataViewMode', dataViewMode)
    }, [dataViewMode])

    const filteredData = contacts.data.filter(c => c.name.first.toLowerCase().includes(filters.fullname.toLowerCase())
        || c.name.last.toLowerCase().includes(filters.fullname.toLowerCase()))
        .filter(g => {
            if (filters.gender === 'all') return true
            return g.gender === filters.gender
        })
        .filter(n => {
            if (filters.nationality === 'all') return true
            return n.nat === filters.nationality
        })

    const clearFilters = () => {
        setFilters(FiltersDefaultValue)
    }

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
                    <Filters
                        filters={filters}
                        setFilters={setFilters}
                        clearFilters={clearFilters}
                    />
                </Grid>

                <Grid item xs={12}>
                    {dataViewMode === ViewMode.Table ?
                        <ContactsTable data={filteredData} />
                        :
                        'this is grid'}
                </Grid>
            </Grid>
        </Container>
    )
}