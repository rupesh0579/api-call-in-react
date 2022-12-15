import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

const AboutUs = () => {
  const [apiData, setAPiData] = useState();

  useEffect(() => {
    async function callApi() {
      try {
        const apiResult = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setAPiData(apiResult.data)
      }
      catch (error) {
        console.log(error);
        // alert('Api is not working!');
      }
    }
    callApi();
    // console.log(apiData)
  }, [apiData])

  return (
    <div className='api-data'>
      <table style={{ width: "800px", margin: "50px auto", border: "1px solid red" }}>
        <thead style={{ backgroundColor: '#444', color: "#fff" }}>
          <tr>
            <th style={{ padding: "15px" }}>ID</th>
            <th style={{ padding: "10px" }}>TITLE</th>
            <th style={{ padding: "10px" }}>BODY</th>
          </tr>
        </thead>
        <tbody>
          {apiData &&
            apiData.map((apiDetails, index) =>
            (
              <tr key={index}>
                <td style={{ padding: "10px", textAlign: "center" }}>{apiDetails.id}</td>
                <td style={{ padding: "10px" }}>{apiDetails.title}</td>
                <td style={{ padding: "10px" }}>{apiDetails.body}</td>
              </tr>
            )
            )
          }
        </tbody>
      </table>
    </div>
  );
}



export default AboutUs;