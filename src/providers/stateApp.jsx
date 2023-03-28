import { createContext, useCallback, useEffect, useState } from "react"
import Loader from "../components/common/Loader/Loader";
import Snackbar from "../components/common/Snackbar/Snackbar";

export const StateAppContext = createContext();
export const StateAppProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const hiddenSnackbar = useCallback(() => {
    setTimeout(() => { setError(false) }, 3000)
  }, []);

  useEffect(() => {
    if(error) {
      hiddenSnackbar()
    }
  }, [error, hiddenSnackbar]);

  return (
    <StateAppContext.Provider value={{ error, setLoading, setError }}>
      {loading && <Loader />}
      {error && <Snackbar message={error} />}
      {children}
    </StateAppContext.Provider>
  )
}

