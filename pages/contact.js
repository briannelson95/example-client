import styles from '../styles/Contact.module.css'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function Home() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [optionOne, setOptionOne] = useState('')
    const [submitted, setSubmitted] = useState(false)
  
    const handleSubmit = (e) => {
        e.preventDefault()
  
        let data = {
            name,
            email,
            optionOne,
            message
        }
  
        fetch('/api/contact', {
            method: 'POST',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true) 
                setName('')
                setEmail('')
                setMessage('')
            }
        })
    }
  
    return (
        <div className={styles.container}>
            <form className={styles.main} >
    
            <formgroup className={styles.inputGroup} >
                <label htmlFor='name'>Name</label>
                <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} name='name' className={styles.inputField} />
            </formgroup>
    
            <formgroup className={styles.inputGroup} >
                <label htmlFor='email'>Email</label>
                <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} name='email' className={styles.inputField} />
            </formgroup>

            <formgroup className={styles.inputGroup} >
                <label htmlFor='services'>Service:</label>
                <select id='services' name='services'>
                    <option value={optionOne} onChange={(e)=>{setOptionOne(e.target.value)}}>Option One</option>
                </select>
            </formgroup>
    
            <formgroup className={styles.inputGroup} >
                <label htmlFor='message'>Message</label>
                <input type='text' value={message} onChange={(e)=>{setMessage(e.target.value)}} name='message' className={styles.inputField} />
            </formgroup>
    
            <input className={styles.button} type='submit' onClick={(e)=>{
                handleSubmit(e), 
                toast.success('Message Sent!', {
                    duration: 5000
                })
                }}
            />
            </form >
        </div>
        )
  }