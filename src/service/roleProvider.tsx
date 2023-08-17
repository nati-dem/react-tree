import axios from "axios";
import { roleDataType } from "../types/roleDataType";
import * as mockService from "./mockService";

const roleServiceUrl = "http://localhost:5000/api/treeStructure";
const mockEnabled = true;

const getRoles = async () => {
  if(mockEnabled)
    return mockService.getRoles();
  else {
    const response =  await axios.get(
      `${roleServiceUrl}/allTrees/`
    );
    return response.data;
  }

}

const getRole = async (roleId: any) => {
  if(mockEnabled)
    return mockService.getRole(roleId);
  else {
    const response = await axios.get(
      `${roleServiceUrl}/${roleId}`
    );
    return response.data;
  } 
}

const editRole = async (roleId: any, data: roleDataType) => {
  if(mockEnabled)
    return mockService.editRole(roleId, data);
  else {
    const response = await axios.patch(
      `${roleServiceUrl}/updateEmployeeRole/${roleId}`,
      data
    );
    return response.data;
  }
}

const deleteRole = async (roleId: any) => {
  if(mockEnabled)
    return mockService.deleteRole(roleId);
  else {
    const response = await axios.delete(
      `${roleServiceUrl}/deleteEmployeeRole/${roleId}`
    );
    return response.data;
  }
}

const addRoles = async (data: roleDataType) => {
  if(mockEnabled)
    return  mockService.addRole(data);
  else {
    const response = await axios.post(
      //"http://localhost:5000/api/treeStructure/addTrees/",
      `${roleServiceUrl}/addTrees/`,
      data
    );
    return response.data;
  }

}


export default {
  getRoles,
  getRole,
  editRole,
  deleteRole,
  addRoles
}
