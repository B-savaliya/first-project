import { gql, useQuery } from "@apollo/client";
import React from "react";

const EXAMPLEQUERY = gql`
  query ExampleQuery {
    allFilms {
      films {
        title
      }
    }
  }
`;

function GraphQlComp() {
  const { loading, error, data } = useQuery(EXAMPLEQUERY);
  console.log("****", loading, error, data);

  return <div>Graph ql</div>;
}

export default GraphQlComp;
