import React from 'react'

export default function Album() {
  return (
    <div style={{color:"purple"}}>
      <table style={{ width: "30%", marginLeft: "32rem" }} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col">Artist</th>
            <th scope="col">Song</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>Harry styles</td>
            <td>As it was</td>
          </tr>
          <tr>
            <td scope='row'>Bts</td>
            <td>Dynaminte</td>
          </tr>
         
          <tr>
          <td scope='row'>zyan malik</td>
          <td>Dusk till dawn</td>
        </tr>
        <tr>
        <td scope='row'>Dua lipa</td>
        <td>Levitating</td>
      </tr>
     

        </tbody>
      </table>
    </div>
  )
}