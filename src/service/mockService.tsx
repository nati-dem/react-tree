
import { roleDataType } from "../types/roleDataType";
import { v4 as uuidv4 } from 'uuid';

let mockData: roleDataType[] = [
  {_id: "1", name: "CEO", description: "Cheif executive officer", parentId: ""},
  {_id: "2", name: "CTO", description: "Cheif tech officer", parentId: "1"},
  {_id: "3", name: "CFO", description: "Cheif finance officer", parentId: "1"},
  {_id: "4", name: "Tech lead", description: "Tech lead", parentId: "2"},
];

const getRoles = () => {
    return mockData;
}

const getRole = (roleId: any) => {
    return mockData.find(r => r._id === roleId)
}

const editRole = (roleId: any, data: roleDataType) => {
  mockData = mockData.filter(r => r._id !== roleId)
  mockData.push(data);
  return mockData;
}

const deleteRole = (roleId: any) => {
  mockData = mockData.filter(r => r._id !== roleId )
                    .filter(r => r.parentId !== roleId )
  return mockData;
}

const addRole = (data: roleDataType) => {
  //mockData = Object.assign([], mockData)
  data._id = uuidv4();
  mockData = [...mockData, data];
  //mockData.push(data);
  return data;
}

export {
  getRoles,
  getRole,
  editRole,
  deleteRole,
  addRole
}
