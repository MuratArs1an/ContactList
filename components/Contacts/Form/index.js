import {useState, useEffect} from 'react'

const initialFormValues={fullname:"", phone_number:""}// form icerisini daha kolay temizleyebilmek icin disarida bir tanimlama yaptik

function Form({addContacts, contacts}) { //props girerek buradan aldigimiz input bilgileri bir ust componente tasidik
    const[form, setForm]=useState(initialFormValues)

    useEffect(()=>{
        setForm(initialFormValues) // form icerisini temizleme
    },[contacts]) //contacts e degisme oldugunda yani ekleme yapildiginda formu temizledik

    const onChangeInput=(e)=>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit=(e)=>{
        e.preventDefault()

        if(form.fullname==="" || form.phone_number===""){
            return false //formun bos gonderilmesini engelledik
        }
        addContacts([...contacts,form]) // arrayin eski elamanlarinida dahil ettik
    }
    //form elemanlarini olusturduk
    return (
    <form onSubmit={onSubmit}> 
        <div className='inputDiv'>
            <input name="fullname"
            placeholder='Full Name'
            onChange={onChangeInput}
            value={form.fullname} />
        </div>
        <div>
            <input name='phone_number'
            placeholder='Phone Number'
            onChange={onChangeInput}
            value={form.phone_number} />
        </div>

        <div className='btn'>
            <button>Add</button>
        </div>
    </form>
    )
}

export default Form