import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  // width: 100%;
  tr {
    border-bottom: 1px solid #dddddd;
    text-align: left;
    // padding: 8px;
  }
  table {
    border: 1px solid #dddddd;
    padding: 10px;
    width:100%;
  }
  padding:25px;

  th{
    font-weight:500;
    padding:25px 0 25px 20px;
  }

  td{
    padding:10px 0px 10px 20px;
  }
  // tr { 
  //   border: solid;
  //   border-width: 1px 0;
  // }
`;

export default function StatsTable({ rows }) {
  function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
  // let temp=[{"date":"15-01-2021","clicks":693231,"revenue":4624,"adRequest":4529895,"adResponse":2061524,"impressions":80000},{"date":"16-01-2021","clicks":5173758,"revenue":2679,"adRequest":8316829,"adResponse":7225168,"impressions":80000},{"date":"17-01-2021","clicks":878459,"revenue":1802,"adRequest":1349392,"adResponse":975736,"impressions":80000},{"date":"18-01-2021","clicks":1627632,"revenue":3608,"adRequest":5760110,"adResponse":3138006,"impressions":80000},{"date":"19-01-2021","clicks":1217214,"revenue":1296,"adRequest":9906066,"adResponse":4358454,"impressions":80000},{"date":"20-01-2021","clicks":145870,"revenue":1665,"adRequest":4199708,"adResponse":3248406,"impressions":80000},{"date":"21-01-2021","clicks":1029645,"revenue":977,"adRequest":8364844,"adResponse":2138445,"impressions":80000}]
  return (
    <Wrapper>
<table border='1' frame='void' rules='rows'>
        <tr>
          <th>Date</th>
          <th>Revenue</th>
          <th>Ad Requests</th>
          <th>Ad Responses</th>
          <th>Impressions</th>
          <th>Clicks</th>
          <th>Render Rate</th>
        </tr>

        {rows?.map((row)=>{return(
            <tr>
            <td>{row.date}</td>
            <td>${thousands_separators(row.revenue)}</td>
            <td>{thousands_separators(row.adRequest)}</td>
            <td>{thousands_separators(row.adResponse)}</td>
            <td>{thousands_separators(row.impressions)}</td>
            <td>{thousands_separators(row.clicks)}</td>
            <td>{Math.round((row.impressions / row.adResponse) * 100)}%</td>
          </tr>
        )})}
      </table>
    </Wrapper>
  );
}
