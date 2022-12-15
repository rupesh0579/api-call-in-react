import React from 'react'
import axios from 'axios';
import './style.css';

import { useEffect, useState } from 'react';

const Home = () => {
  const [apiData, setAPiData] = useState();

  useEffect(() => {
    async function callApi() {
      try {
        const apiResult = await axios.get('https://api.github.com/gists?per_page')
        setAPiData(apiResult.data)
        console.log("rupesh", apiResult)

      } catch (error) {
        console.log("api is not working", error);
      }
    }
    callApi();
  }, []);

  return (
    <div className='api-data'>
      <table>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>IMAGE</th>
            <th>USER NAME</th>
            <th>USER ID</th>
            <th>CREATE DATE</th>
            <th>USER LOGIN</th>
            <th>Update Date</th>
          </tr>
        </thead>
        <tbody >
          {apiData &&
            apiData.map((apiDetails, index) =>
            (
              <tr key={index}>
                <td>{apiDetails.owner.id}</td>
                <td> <img src={apiDetails.owner.avatar_url}></img> </td>
                <td>{apiDetails.owner.login}</td>
                <td>{apiDetails.owner.id}</td>
                <td>{apiDetails.created_at}</td>
                <td>{apiDetails.html_url}</td>
                <td>{apiDetails.created_at}</td>
              </tr>
            )
            )}
        </tbody>
      </table>
    </div>
  )
}

export default Home;