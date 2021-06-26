import {useState,useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter,Switch,Route,Link as NavLink} from 'react-router-dom'
import { Link } from 'react-router-dom';

function Coronanews()
{
	const[newsvalues,setnews]=useState({});

useEffect(()=>
{
  axios.get('https://corona.lmao.ninja/v2/countries')
  .then((res)=>{
    console.log(res.data)
  setnews(res.data)
})
},[]);

	return(
        <div>
            hello
        </div>
	)
}
export default Coronanews;