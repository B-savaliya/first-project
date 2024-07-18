import React from "react";
import { useNavigate } from "react-router-dom";

function Users() {
  const userList = JSON.parse(localStorage.getItem("user"));
  console.log("***", userList);
  const navigate = useNavigate();

  const handleEdit = (index) => {
    navigate(`/register?editId=${index + 1}`);
  };
  return (
    <table>
      {userList?.length > 0 ? (
        <>
          <tr>
            {Object.keys(userList[0]).map((el) => (
              <th>{el}</th>
            ))}
          </tr>
          {userList.map((el, i) => (
            <tr>
              {Object.values(el).map((subEl, subIndex) => (
                <td key={subIndex}>{subEl}</td>
              ))}
              <button onClick={() => handleEdit(i)}>Edit</button>
            </tr>
          ))}
        </>
      ) : (
        <span>no data available</span>
      )}
    </table>
  );
}

export default Users;
