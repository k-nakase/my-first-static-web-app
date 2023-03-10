import React from 'react';

function Table() {
  return (
    <div>
      <div>
        <h1 class="text-center" style={{color: "#007bff", fontWeight: "normal", paddingTop: "30px"}}>Cloud Service Category</h1>
      </div>
      <div>
      <table style={{fontSize: "0.7rem"}}>
          <thead>
            <tr>
              <th width="100px" class="service_header" style={{background: "white"}}></th>
              <th width="100px" class="service_header" style={{background: "red"}}>service</th>
              <th width="100px" class="service_header">cloud_service01</th>
              <th width="100px" class="service_header">cloud_service02</th>
              <th width="100px" class="service_header">cloud_service03</th>
              <th width="100px" class="service_header">cloud_service04</th>
              <th width="100px" class="service_header">cloud_service05</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="6" class="tytle" style={{background: "red"}}>category01</td>
              <td class="service">service02</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
            </tr>
            <tr>
              <td class="service">service08</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
            </tr>
            <tr>
              <td class="service">service19</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
            </tr>
            <tr>
              <td class="service">service08</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
            </tr>
            <tr>
              <td class="service">service19</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
            </tr>
            <tr>
              <td class="service">service08</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
            </tr>
            <tr>
              <td rowspan="3" class="tytle" style={{background: "red"}}>category02</td>
              <td class="service">service02</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
            </tr>
            <tr>
              <td class="service">service08</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
            </tr>
            <tr>
              <td class="service">service19</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
              <td class="service">N/A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
