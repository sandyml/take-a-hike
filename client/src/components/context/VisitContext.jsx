import React, { useState, useEffect, createContext }  from 'react';

const VisitContext = createContext([]);

const VisitProvider = ({ children }) => {
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    fetch('/visits')
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data, "VisitContext")
        setVisits(data)
      })
  }, [])



  // const handleAddVisit = (visit) => {
  //   setVisits((visit) => [...visits, visit])
  // }

  return (
    <VisitContext.Provider value={{ visits }}>
      {children}
    </VisitContext.Provider>
  )
}

export { VisitContext, VisitProvider };