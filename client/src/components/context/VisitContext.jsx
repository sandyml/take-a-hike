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

  // add visit
  const handleAddVisit = (visit) => {
    setVisits([
      ...visits,
      visit
    ])
  };

  // const handleAddVisit = (visit) => {
  //   setVisits((visit) => [...visits, visit])
  // }

  // edit visit date
  const editVisitDate = (newVisitDate) => {
    const updatedVisits = visits.map((visit) => {
      if (newVisitDate.id === visit.id) {
        return newVisitDate;
      } else {
        return visit;
      }
    })
  }


  return (
    <VisitContext.Provider value={{ visits, handleAddVisit, editVisitDate }}>
      {children}
    </VisitContext.Provider>
  )
}

export { VisitContext, VisitProvider };