import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
     const [data,changeData]=useState([])

    const fetchData =()=>{

        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/hospital-data.json").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()

    }
    useEffect(
        ()=>{
            fetchData()
        },[]
    )
  return (
    <div>
        <div className="container mt-4">
        <h2 className="text-center mb-4">View All Employees</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>PatientId</th>
              <th> Full Name</th>
              <th> Age</th>
              <th>Gender </th>
              <th>  Blood Group</th>
             
              <th>Email Address</th>
              <th>Disease / Health Complaint</th>
              <th>Doctor Assigned</th>
              <th>Admission Date</th>
              <th> Room Number</th>
              
            </tr>
          </thead>

          <tbody>
            {
              data.map(
                (value,index)=>{
                  return (
              <tr>
              <td>{value.patientId}</td>
              <td>{value.name}</td>
              <td>{value.age}</td>
              <td>{value.gender}</td> 
              <td>{value.bloodGroup}</td> 
              <td>{value.doctor}</td> 
              <td>{value.disease}</td> 
              <td>{value.roomNo}</td> 
              <td>{value.admissionDate}</td> 
              <td>{value.mobile}</td> 
               
            </tr>

                  )
                }
              )
            }
            
           
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default View