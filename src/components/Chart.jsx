import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1", value: 0 },
  { name: "2", value: 0 },
  { name: "3", value: 2 },
  { name: "4", value: 0 },
  { name: "5", value: 0 },
  { name: "6", value: 0 },
  { name: "7", value: 0 },
  { name: "8", value: 0 },
  { name: "9", value: 0 },
  { name: "10", value: 0 },
  { name: "11", value: 0 },
  { name: "12", value: 0 },
  { name: "13", value: 0 },
  { name: "14", value: 0 },
  { name: "15", value: 0 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={80}>
      <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <CartesianGrid stroke="none" />
        <XAxis dataKey="name" hide />
        <YAxis hide />
        <Tooltip content={<div />} cursor={false} />
        <Line
          type="basic"
          dataKey="value"
          stroke="#2563eb"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
