import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { editVisit } from '../actions/visits';

import { useEffect } from "react";
import { Button } from "@mui/material";
import { TextField } from '@mui/material';

const EditDate = ({ isLoading }) => {
 // const { loggedIn, visits, currentUser } = useSelector((state) => state.usersReducer);
 const { loggedIn, visits } = useSelector((state) => state.usersReducer);
 console.log(visits, "currentUser")

 // const [visited_date, setVisited_date] = useState("");
 const [formData, setFormData] = useState({
  visited_date: ""
 });

 const navigate = useNavigate();
 const dispatch = useDispatch();
 const { id } = useParams();

 useEffect(() => {
  if (loggedIn) {
   navigate('/')
  }
  // debugger
  const dateToEdit = visits.find(vt => vt.id === parseInt(id));
  setFormData({
   visited_date: dateToEdit
  });
 }, [loggedIn, navigate, id, visits]);

 // const handleChange = e => {
 //  const { name, value } = e.target;
 //  setFormData({
 //   ...formData,
 //   [name]: value
 //  })
 // }

 const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(editVisit(id, formData, navigate))
 }

 return (
  <div>
   <div>
    <h2><center>Edit Date</center></h2>
    {/* <form onSubmit={handleSubmit}>
     <TextField
     label='name'
     type="text"
     name="name"
     id="name"
     value={formData.name}
     onChange={handleChange}
     required
     />
     <TextField
     label='date'
     type="number"
     name="age"
     id="age"
     value={formData.Visited_date}
     onChange={handleChange}
     required
     />
      <Button color="primary" type="submit">
       Update
      </Button>
    </form> */}
   </div>
  </div>
 );
}

export default EditDate;