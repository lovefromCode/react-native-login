import React, { createContext, useState } from "react";
import { Text, View } from "react-native/types";

export const AuthContextObj = createContext({});

const AuthProvider = (props) => {
    const [isLoading, setIsLoading] = useState(true)
    const [userToken, setUserToken] = useState(null)

    const login = () => {
        setUserToken('ivbegrvre1232132141')
        setIsLoading(false)
    }

    const logout = () => {
        setUserToken(null)
        setIsLoading(false)
    }

    if (isLoading) {
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Text>loading</Text>
        </View>
    }
    return (
        <AuthContextObj.Provider value={{ login, logout, isLoading, userToken }}>
            {props.children}
        </AuthContextObj.Provider>
    )
}