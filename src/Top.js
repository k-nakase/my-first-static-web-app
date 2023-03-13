import React from 'react';
import { ReactComponent as AzureIcon } from "./azure.svg";
import { ReactComponent as VmwareIcon } from "./vmware.svg";

function Top() {
  return (
    <div>
      <div>
        <h1 class="text-center" style={{color: "#007bff", fontWeight: "normal", paddingTop: "30px"}}>Select Cloud Service</h1>
      </div>
      <div>
        <table>
          <tr class="Cloud_list">
            <td class="Cloud_service" style={{background: "#a0d8ef"}} onClick={SelectCloud}>
              <AzureIcon style={{width: "150px", height: "150px"}}></AzureIcon>
              <br></br>
              Azure
            </td>
            <td class="Cloud_service" style={{background: "#192f60"}}>AWS</td>
            <td class="Cloud_service" style={{background: "white"}}>
              <VmwareIcon style={{width: "150px", height: "150px"}}></VmwareIcon>
              <br></br>
              VMware
            </td>
            <td class="Cloud_service">GCP</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

function SelectCloud() {
  window.location.href = "overview.html";
}

export default Top;
