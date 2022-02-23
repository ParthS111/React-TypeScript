import React from 'react'

type ProfileProps={
    name ?:string
    age ?:number
    status: 'single' | 'commited'
    children ?:React.ReactNode
}


const Profile = (props:ProfileProps) => {
  return (
    <div style={{border:'2px solid',margin:'2px'}}>
       <h1> name : {props.name}</h1>
        <h2>age: {props.age}</h2>
        <h2>stauts :{props.status}</h2>
        {props.children}
        </div>
  )
}

export default Profile