import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../lib/redux/reducers/common";

function Users() {
  const userList = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])
  
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
              <button>Edit</button>
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
