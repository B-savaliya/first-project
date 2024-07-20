import React, { useState } from "react";
import Child from "./children";
import Button from "../../common/components/button";
import { useQuery, gql } from "@apollo/client";

// useState
// useEffect
// useContext

const GET_LOCATIONS = gql`
  query Query {
    country(code: "BR") {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
    countries {
      name
      states {
        name
      }
    }
  }
`;

function Parent(props) {
  const parentData = "this is parent string";
  const [category, setCategory] = useState({ name: "test" });
  //   console.log("parent_props******", props);
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  console.log("**********", loading, error, data);
  // console.log("category********", category);

  const callBackFn = (params) => {
    // console.log("params*******", params);
  };

  return (
    <div>
      <Child
        parentData={parentData}
        callBackFn={callBackFn}
        setCategory={setCategory}
      />
      {category.name}
      <Button onClick={() => setCategory({ name: "john" })} />
    </div>
  );
}

export default Parent;

// mounting
// updating
// unmounting
