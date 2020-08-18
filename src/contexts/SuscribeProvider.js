import React, { createContext } from 'react'
import { firebase } from '../firebase'

export const SuscribeContext = createContext()

const SuscribeProvider = ({children}) => {

    const addSuscribe = async (email) => {
        try {
          const db = firebase.firestore()
          const newEmail = {
            email: email
          }
          const data = await db.collection('suscribers').add(newEmail)
          console.log(data)

        } catch (error) {
          console.log(error)
        }
      }

    return (
        <SuscribeContext.Provider value={{ addSuscribe }}>
            { children }
        </SuscribeContext.Provider>
    )
}

export default SuscribeProvider
