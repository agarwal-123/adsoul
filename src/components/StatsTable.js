import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  tr {
    border-bottom: 1px solid #dddddd;
    text-align: left;
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
`;

export default function StatsTable({ rows }) {
  function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
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
