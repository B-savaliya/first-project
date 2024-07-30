import React, { useContext, useEffect } from "react";
import MyContext from "../../../../myContext";

function Three() {
  const context = useContext(MyContext);
  console.log("comp_three******", context);
  const data = [
    {
      name: "dfgdgsdgfdgdfgs",
    },
  ];

  useEffect(() => {
    context.setDetails(data);
  }, []);

  return (
    <div>
      Three
      {data[0].name}
    </div>
  );
}

export default Three;
