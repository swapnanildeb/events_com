

import { checkLogin } from "@/app/server-actions/actions";
import { useState, useEffect } from 'react'
// import { cookies } from 'next/headers'


export function UserDashboard() {
  // const data = cookies().get('name')?.value
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => {
        setData(data.currUser)
      })
  }, [])


  return (
    <h1 className="sr-only">{data}</h1>
  );
}
