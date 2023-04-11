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

  // delete visit date 
  const deleteVisitDate = (deleteVisitDate) => {
    console.log("deleted visit!")
    const updatedVisits = visits.filter((visit) => visit.id !== deleteVisitDate.id)
    setVisits(updatedVisits)
  };

  return (
    <VisitContext.Provider value={{ visits, handleAddVisit, editVisitDate, deleteVisitDate }}>
      {children}
    </VisitContext.Provider>
  )
}

export { VisitContext, VisitProvider };