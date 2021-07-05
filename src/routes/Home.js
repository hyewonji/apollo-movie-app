import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_MOVIES = gql`
    {
        movies {
            id
            medium_cover_image
        }
    }
`;

export default () => {
    const { loading, error, data } = useQuery(GET_MOVIES);

    return (
        <Continer>
            <Header>
                <Title>Apollo 2020</Title>
                <Subtitle>I love GraphQL</Subtitle>
            </Header>
            {loading && <Loading>Loading...</Loading>}
            {!loading &&
                data.movies &&
                data.movies.map((m) => <Movie key={m.id} {...m} />)}
        </Continer>
    );
};
