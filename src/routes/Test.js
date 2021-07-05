import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
    {
        helloWorld
    }
`;

export default () => {
    const { loading, error, data } = useQuery(GET_DATA);
    console.log(data);
    console.log("hi");
    return <h1>{data}</h1>;
};
