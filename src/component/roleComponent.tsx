import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { AiOutlineFolderAdd, AiOutlineEdit } from "react-icons/ai";
import { useSelector } from "react-redux";

function RoleComponent(role: any) {
  const navigate = useNavigate();
  const roles = useSelector((state: any) => state.roles.data);
  const [show, setShow] = useState(false);

  const addRole = () => {
    navigate(`/addEmployeeRole/${role._id}`);
  };

  const editRole = () => {
    navigate(`/EditEmployeeRole/${role._id}`);
  };

  return (
    <div className="ml-7 p-1">
      <div className="border-b-2 border-slate-100 w-[600px]">
        {role.child.length > 0 && (
          <span className=" mt-3">
            <button onClick={() => setShow(!show)}>
              {show ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </button>
          </span>
        )}
        {role.name}
        <span className=" pl-60 pr-4">
          <button
            className="text-lime-700 hover:text-black text-[22px]"
            onClick={addRole}
          >
            <AiOutlineFolderAdd />
          </button>
        </span>
        <span>
          <button
            className="text-lime-700 hover:text-black text-[22px]"
            onClick={editRole}
          >
            <AiOutlineEdit />
          </button>
        </span>
      </div>

      <div className={`${show ? "flex" : "hidden"} flex-col`}>
        {role.child.length > 0 &&
          role.child.map((r: any) => {
            return (
              <div>
                <RoleComponent
                  key={r._id}
                  _id={r["_id"]}
                  name={r["name"]}
                  child={roles.filter((k: any) => k["parentId"] == r["_id"])}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default RoleComponent;
