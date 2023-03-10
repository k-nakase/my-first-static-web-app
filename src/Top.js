import React from 'react';

function Top() {
  return (
    <div>
      <div>
        <h1 class="text-center" style={{color: "#007bff", fontWeight: "normal", paddingTop: "30px"}}>Select Cloud Service</h1>
      </div>
      <div>
        <table>
          <tr class="Cloud_list">
            <td class="Cloud_service" style={{background: "#a0d8ef"}} onClick={test}>
              Azure
            </td>
            <td class="Cloud_service" style={{background: "#192f60"}}>AWS</td>
            <td class="Cloud_service" style={{background: "white"}}>VMware</td>
            <td class="Cloud_service">GCP</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

function test() {
  window.location.href = "overview.html";
}

export default Top;
