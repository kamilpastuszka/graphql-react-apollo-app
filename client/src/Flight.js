import React from "react";

export default function Flight(props) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Flight Number</th>
          <th>Launch Year</th>
        </tr>
        <tr>
          <td>
            <p>{props.flightNumber}</p>
          </td>

          <td>
            <p>{props.launchYear}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
