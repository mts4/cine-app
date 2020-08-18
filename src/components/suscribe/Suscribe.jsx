import React, { useState, useContext } from 'react'
import './suscribe.components.styles.css'
import { SuscribeContext } from '../../contexts/SuscribeProvider'

const Suscribe = () => {

    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)

    const { addSuscribe } = useContext( SuscribeContext )
    
    const [email, setEmail] = useState('')
    const [errorEmail, setErrorEmail] = useState(false)

    const validateSuscribe = e => {
        e.preventDefault()
        if (!pattern.test(email)) {
            setErrorEmail(true)
            return
        }

        setErrorEmail(false)
        addSuscribe(email)
    }

    return (
        <div className="row no-gutters bg-light2 d-flex align-items-center mt-7 pt-5 pb-5">
            <div className="col-12">
                <h2 className="suscribe_title">Unete ahora</h2>
            </div>
            <div className="col-12">
                <p className="suscribe_description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy consectetuer adipiscing.</p>
            </div>
            <div className="col-12">
                <form className="formSuscribe" onSubmit={ validateSuscribe }>
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            id="inputEmail"
                            placeholder="Introduce tu email"
                            onChange={ e => setEmail(e.target.value) }
                            value= { email }
                        />
                        <button 
                            type="submit" 
                            className="btn btn-primary btnSuscribe">
                                Suscribirse
                        </button>
                        <div 
                            className={
                                "alertSuscribe alert alert-danger alert-dismissible mt-4 " + 
                                (errorEmail ? 'show' : 'fade')
                            }
                            role="alert"
                        >
                            Ingrese email correctamente
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Suscribe
