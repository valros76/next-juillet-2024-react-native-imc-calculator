import {createContext, useContext, useEffect, useState} from "react";
import {getSavedFirstname, getSavedHistory} from "../AsyncFunctions";

const ImcCalculatorContext = createContext();

const ImcCalculatorProvider = ({children}) => {

  const [firstname, setFirstname] = useState("");
  const [history, setHistory] = useState([]);

  const findFirstname = async () => {
    const result = await getSavedFirstname();
    if(result){
      setFirstname(result);
    }
  }

  const findHistory = async () => {
    const result = await getSavedHistory();
    if(result){
      setHistory(result);
    }
  }

  useEffect(() => {
    findFirstname();
    findHistory();
  }, []);

  return(
    <ImcCalculatorContext.Provider
      value={{
        firstname,
        setFirstname,
        history,
        setHistory,
        findFirstname,
        findHistory
      }}
    >
      {children}
    </ImcCalculatorContext.Provider>
  );
}

export const useImcCalculatorContext = () => useContext(ImcCalculatorContext);

export default ImcCalculatorProvider;