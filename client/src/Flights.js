import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Flight from "./Flight";

const FLIGHTS_QUERY = gql`
  query Flights {
    getLaunches {
      flight_number
      launch_year
    }
  }
`;

export default class Flights extends Component {
  render() {
    return (
      <div>
        <Query query={FLIGHTS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>loading data...</h4>;
            if (error) console.log(error);

            return (
              <>
                {data.getLaunches.map(flight => (
                  <Flight
                    key={flight.flight_number}
                    flightNumber={flight.flight_number}
                    launchYear={flight.launch_year}
                  />
                ))}
              </>
            );
          }}
        </Query>
      </div>
    );
  }
}
