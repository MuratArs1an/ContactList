import List from "./List"
import Form from "./Form"
import {useState, useEffect} from "react"

function Contacts() {
    const[contacts,setContact]=useState([
        {
            fullname:"Murat",
            phone_number:"12312414"
        },
        {
            fullname:"Busra",
            phone_number:"979867978"
        },
        {
            fullname:"Mustafa",
            phone_number:"021331241"
        }
    ]) //form bilgileri cekmek icin state olusturduk ve array veri tipini verdik
    useEffect(()=>{
        console.log(contacts)
    },[contacts]) // form submit yapildiginda verileri yakaladik
    return (
    <div id="container">
        <h1>Contacts</h1>
        <List contacts={contacts} />
        <Form addContacts={setContact} contacts={contacts}/>
    </div>
    //olusturdugumuz state i prop olarak form componentine verdik
    // contactsi da prop olarak verdik boylece array in onceki elemanlarinida alabildik
    )
}

export default Contacts