"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);
  const [signUp, setSignUp] = useState(false);
  const [logIn, setLogIn] = useState(false);

  

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        logIn,
        setLogIn,
        signUp,
        setSignUp,
        searchText,
        setSearchText,
        allPosts,
        setAllPosts,
        searchTimeout,
        setSearchTimeout,
        searchedResults,
        setSearchedResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
