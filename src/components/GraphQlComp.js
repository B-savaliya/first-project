import { gql, useMutation, useQuery } from "@apollo/client";
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

const CreateMutation = gql`
  mutation Login($email: String!) {
    login(email: $email) {
      token
    }
  }
`;

function GraphQlComp() {
  // const { loading, error, data } = useQuery(EXAMPLEQUERY);
  const [Login, { loading, error, data }] = useMutation(CreateMutation);
  console.log("****", loading, error, data);

  return <div onClick={() => Login("abc@gmail.com")}>Graph ql</div>;
}

export default GraphQlComp;
