import { useState, useContext, createContext, ReactNode } from "react";

interface DataProviderProps {
  children: ReactNode;
}

interface DataContextType {
  setValues: any;
  data: any
}

export const DataContext = createContext<DataContextType>(
  {} as DataContextType
)

export function DataProvider ({ children }: DataProviderProps) {
  const [data, setData] = useState({})

  const setValues = (values) => {
    setData(prevData => ({
      ...prevData,
      ...values
    }))
  }

  return (
    <DataContext.Provider value={{ data, setValues }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData () {
  const context = useContext(DataContext)
  return context
}