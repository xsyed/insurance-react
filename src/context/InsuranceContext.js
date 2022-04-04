import {createContext} from "react"

const initialState = {
    insurances: [
        {
            id:1,
            insurerName:"Proteco Insurance",
            description:"Our most affordable package. Your personal belongings will be covered up to 15k$. This is perfect if you own a few belongings.",
            price: 12.50
        },
        {
            id:2,
            insurerName:"Umbrella insurance",
            description:"Our most popular package. Your personal belongings will be covered up to 30k$. This package also includes a free water sensor to detect a water leak in your home.",
            price: 35.73
        },
        {
            id:3,
            insurerName:"Thor insurance",
            description:"Nothing but the best. Your personal belongings will be covered up to 100k$. It even includes a protection against an alien invasion.",
            price: 79.30
        },
    ]
}

export const InsuranceContext = createContext(initialState)

export const InsuranceProvider = ({children}) => {
    return (
        <InsuranceContext.Provider value={{
            insurances: initialState.insurances
        }}>
            {children}    
        </InsuranceContext.Provider>
    )
}
