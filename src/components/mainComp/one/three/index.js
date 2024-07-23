import React, { useContext, useEffect } from "react";
import MyContext from "../../../../myContext";

function Three() {
    const context = useContext(MyContext)
    console.log('context******', context);
  const data = [
    {
      name: "data 1",
    },
  ];

  useEffect(() => {
    context.setDetails(data)
  }, [])
  

  
  return (
    <div>
      Three
      {data[0].name}
    </div>
  );
}

export default Three;
