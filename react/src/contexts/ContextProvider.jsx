import * as React from "react";

const StateContext = React.createContext({
    currentUser: {},
    userToken: localStorage.getItem('TOKEN'),
    setCurrentUser: () => { },
    setUserToken: () => { },
});

export const ContextProiver = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState({});
    const [userToken, setUserToken] = React.useState(localStorage.getItem('TOKEN'));

    return (
        <StateContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                userToken,
                setUserToken
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => React.useContext(StateContext);