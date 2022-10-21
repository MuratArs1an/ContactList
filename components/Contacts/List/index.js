import {useState} from 'react'

function List({contacts}) {

    // filitreleme input na girilen degerleri tutmak icin state hazirladik 
    const [filterText, setFilterText]=useState('')

    //filitreleme islemi icin contacts arrayin e filter metodunu yazdik donen her bir item icin object sinifindan key metodu ile keylerini aldik some ile herhangi bir key e uymasi durumunda da calismaini istedik, stringe cevirip kucuk harf yaptik ki buyuk kucuk harf duyarliligi olmasin, sonra filterText i icerip icermedigine baktik

    const filtered=contacts.filter((item)=>{
        return Object.keys(item).some((key)=>
            item[key]
            .toString()
            .toLocaleLowerCase()
            .includes(filterText.toLocaleLowerCase())
        )
    })


    // filter inputunu olusturduk ve gelen verileri statemize ekledik
    return (
    <div>
        <input placeholder='Filter Contacts'
        value={filterText} 
        onChange={(e)=>setFilterText(e.target.value)} />
        
        <ul className="list">
            {
            filtered.map((contact,i)=>
            <li key={i}>
                <span>{contact.fullname}</span>
                <span>{contact.phone_number}</span>
                </li>)
            }
        </ul>

        <p>Total Contacts: ({filtered.length})</p>
    </div>
    )
}

export default List