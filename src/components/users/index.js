import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Users() {
  const userList = JSON.parse(localStorage.getItem("user"));
  const [renderedUserList, setRenderedUserList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setRenderedUserList(userList);
  }, []);

  const handleEdit = (index) => {
    navigate(`/register?editId=${index + 1}`);
  };

  const handleDelete = (index) => {
    const isDelete = window.confirm(
      "Are you sure you want to delete this entry?"
    );
    if (isDelete) {
      userList.splice(index, 1);
      setRenderedUserList(userList);
      localStorage.setItem("user", JSON.stringify(userList));
    }
  };

  return (
    <table>
      {renderedUserList?.length > 0 ? (
        <>
          <tr>
            {Object.keys(renderedUserList[0]).map((el) => (
              <th>{el}</th>
            ))}
          </tr>
          {renderedUserList.map((el, i) => (
            <tr>
              {Object.values(el).map((subEl, subIndex) => (
                <td key={subIndex}>{subEl}</td>
              ))}
              <button onClick={() => handleEdit(i)}>Edit</button>
              <button onClick={() => handleDelete(i)}>Delete</button>
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
