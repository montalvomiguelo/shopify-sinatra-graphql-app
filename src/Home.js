import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopName: ''
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome to {this.state.shopName}</h1>
        <p>Sinatra in the backend</p>
      </div>
    );
  }

  componentDidMount() {
    const client = new ApolloClient({
      fetchOptions: {
        credentials: 'include'
      }
    });

    client
      .query({
        query: gql`
          {
            shop {
              name
            }
          }
        `
      })
      .then(result => {
        this.setState({
          shopName: result.data.shop.name
        });
      });
  }
}

export default Home;
