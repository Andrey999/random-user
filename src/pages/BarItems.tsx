import React from 'react';

interface BarItemsProps {
    barHeight: number;
    d: { name: string, value: number };
}

export const BarItems = (props: BarItemsProps) => {
    let barPadding = 2
    let barColour = '#348AA7'
    let widthScale = (d: any) => d * 10

    let width = widthScale(props.d.value)
    let yMid = props.barHeight * 0.5

    return <g className="bar-group">
        <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle" >{props.d.name}</text>
        <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
        <text className="value-label" x={width - 8} y={yMid} alignmentBaseline="middle" >{props.d.value}</text>
    </g>
};