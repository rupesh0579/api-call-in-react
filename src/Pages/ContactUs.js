import React, { useEffect, useState } from 'react'
import User from './user';

const ContactUs = (props) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(10);
  useEffect(() => {
    // alert("count is", count)
  }, [count])
  return (
    <div>
      <User count={count} data={data} />
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setCount(count - 1)}>Decr Number</button>
      <button onClick={() => setData(data - 1)}> Updata Data</button>

    </div>
  )
}

export default ContactUs;
