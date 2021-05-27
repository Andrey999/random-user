import React, {useState, useEffect, useCallback} from 'react';
import {useContacts} from "../../hooks/useContacts";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core';
import {ContactsTable} from "../../components/ContactsTable";
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        marginTop: theme.spacing(4),
    },
    headTitle: {
        marginBottom: theme.spacing(3),
    },
}));

enum viewMode {
    table = 'table',
    grid = 'grid'
}

export const Contacts = () => {
    const classes = useStyles()
    const contacts = useContacts()
    const [dataViewMode, setDataViewMode] = useState(viewMode.table)

    const setTableMode = useCallback(() => {
        setDataViewMode(viewMode.table)
    }, [setDataViewMode, dataViewMode])

    const setGridMode = useCallback(() => {
        setDataViewMode(viewMode.grid)
    }, [setDataViewMode, dataViewMode])

    if (contacts.isLoading) {
        return <div>...loading</div>
    }

    if (contacts.isError) {
        return <div>...error</div>
    }

    return (
        <Container className={classes.root}>
            <Grid container>
                <Grid item xs={12} className={classes.headTitle}>
                    <Typography variant="h5">
                        Contacts
                    </Typography>

                    <ToggleButtonGroup orientation="horizontal"  exclusive>
                        <ToggleButton value="list" aria-label="list" onClick={setTableMode}>
                            <ViewListIcon/>
                        </ToggleButton>
                        <ToggleButton value="module" aria-label="module" onClick={setGridMode}>
                            <ViewModuleIcon/>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid item xs={12}>
                    {dataViewMode === viewMode.table ? <ContactsTable data={contacts.data} /> : 'this is grid' }
                </Grid>
            </Grid>
        </Container>
    )
}