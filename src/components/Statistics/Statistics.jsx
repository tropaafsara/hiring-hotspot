import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const marksArray= [
        {
            "id": "0",
            "assignment_name": "A1",
            "assignment_number": "40"
        },
        {
            "id": "1",
            "assignment_name": "A2",
            "assignment_number": "50"
        },
        {
            "id": "2",
            "assignment_name": "A3",
            "assignment_number": "60"
        },
        {
            "id": "3",
            "assignment_name": "A4",
            "assignment_number": "60"
        },
        {
            "id": "4",
            "assignment_name": "A5",
            "assignment_number": "40"
        },
        {
            "id": "5",
            "assignment_name": "A6",
            "assignment_number": "50"
        },
        {
            "id": "6",
            "assignment_name": "A7",
            "assignment_number": "40"
        }
    ];
    return (
        <div>
            <h1 className='mt-5 mb-5'>Assignment Marks in Scatter Chart</h1>
<ResponsiveContainer width="100%" height={500}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis  dataKey="assignment_name" />
          <YAxis dataKey="assignment_number" name="weight" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={marksArray} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Statistics;