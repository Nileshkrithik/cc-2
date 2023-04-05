import React from 'react'

export default function Singer() {
  return (
    <div style={{color:"red"}}>
      <table style={{width:"45%" ,marginLeft:"45rem"}} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col">Band</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>One Direction</td>
            <td>2008</td>
          </tr>
          <tr>
            <td scope='row'>Score</td>
            <td>2018</td>
          </tr>
          <tr>
            <td scope='row'>Revolution</td>
            <td>2005</td>
          </tr>
          <tr>
          <td scope='row'>Metallica</td>
          <td>1986</td>
        </tr>
        <tr>
        <td scope='row'>BTS</td>
        <td>2013</td>
      </tr>

        </tbody>
      </table>
    </div>
  )
}