import React from 'react'
import Head from '../head'

const student=()=> {
  return (
    <>
    <Head/>

    <div className='list'>
    <h1>Student Details</h1>
    <button>Add New Student</button>
    </div>
    <table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Course</th>
    <th>Batch</th>
    <th>Change</th>
  </tr>
  <tr>
    <td>Mahima</td>
    <td>21</td>
    <td>MERN</td>
    <td>October</td>
    {/* <td> <a href="">edit</a>  </td> */}


  </tr>
  <tr>
    <td>Falguni</td>
    <td>20</td>
    <td>MERN</td>
    <td>November</td>
    {/* <td> <a href="">edit</a>  </td> */}
  
  </tr>
  <tr>
    <td>Riya</td>
    <td>22</td>
    <td>MERN</td>
    <td>September</td>
    {/* <td> <a href="">edit</a>  </td> */}
 
  </tr>
  <tr>
  <td>Tina</td>
    <td>20</td>
    <td>MERN</td>
    <td>September</td>
    {/* <td> <a href="">edit</a>  </td> */}
  
  </tr>
  <tr>
  <td>Vaishnvi</td>
    <td>25</td>
    <td>MERN</td>
    <td>October</td>
    {/* <td> <a href="">edit</a>  </td> */}

  </tr>

</table>
    </>
  )
}

export default student;