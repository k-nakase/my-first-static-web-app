import React from 'react';

function Top() {
  return (
    <div>
      <div>
        <h1 class="text-center" style={{color: "#007bff", fontWeight: "normal", paddingTop: "30px"}}>Welcome to FCMS Charts!</h1>
      </div>
      <div>
        <table>
          <tr class="Cloud_list">
            <td class="Cloud_service" style={{background: "#a0d8ef"}}>Azure</td>
            <td class="Cloud_service" style={{background: "#192f60"}}>AWS</td>
            <td class="Cloud_service" style={{background: "white"}}>VMware</td>
            <td class="Cloud_service">GCP</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Top;
