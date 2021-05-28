import React from 'react'
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { ViewMode } from '../constants/viewModeEnum'

interface ButtonChangeModeProps {
    dataViewMode: string
    setDataViewMode: (mode: string) => void
}

export const ButtonChangeMode = (props: ButtonChangeModeProps) => {
    const changeViewMode = (event: any, nextView: any) => {
        props.setDataViewMode(nextView)
    }
    return (
        <ToggleButtonGroup
            orientation="horizontal"
            exclusive
            value={props.dataViewMode}
            onChange={changeViewMode}
        >
            <ToggleButton value={ViewMode.Table} aria-label={ViewMode.Table} >
                <ViewListIcon />
            </ToggleButton>
            <ToggleButton value={ViewMode.Grid} aria-label={ViewMode.Grid}>
                <ViewModuleIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    )
}