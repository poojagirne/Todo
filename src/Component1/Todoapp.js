function Todoapp({deleteOne,todos,handlecheckbox})
{
    return(
        <div>
              {
            todos.map((val)=>{
                return(
                    <tr style={{padding:"10px" ,textAlign:'center',border:'2px solid black'}}>
                        <td style={{padding:"5px"}}><input type="checkbox" style={{margin:"0 20px",right:500}} checked={val.done} onChange={()=>{handlecheckbox(val.id)}}/></td>
                       <td style={val.done?{textDecoration:"line-through"}:null}>{val.title}</td>
                       <td class="fa fa-trash" onClick={()=>{deleteOne(val.id)}} style={{paddingLeft:"100px",position:"relative",top:'2px',color:'red'}}></td>
                       <hr></hr>
                    </tr>
                )})}
        </div>
    )
}
export default Todoapp;