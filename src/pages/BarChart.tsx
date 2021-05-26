import React from 'react';
import { BarItems } from './BarItems';

interface BarProps {
    state: Array<{ name: string, value: number }>
}

export const BarChart = (props: BarProps) => {
    let barHeight = 30
    let barGroups = props.state.map((d, index) => <g transform={`translate(0, ${index * barHeight})`} key={index}>
        <BarItems d={d} barHeight={barHeight} />
    </g>)

    return (
        <svg width="800" height="300">
            <g className="container">
                <text className="title" x="10" y="30">Week beginning 9th July</text>
                <g className="chart" transform="translate(100,60)">
                    {barGroups}
                </g>
            </g>
        </svg>
    )
};