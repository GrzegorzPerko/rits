import { useContext, useEffect, useState, useCallback } from "react";
import { useService } from './useServices';
import { StateAppContext } from "../providers/stateApp";
import UsersServices from "../services/users";

export const useUsers = () => {
  const [ data, setData ] = useState([]);
  const { setLoading, setError } = useContext(StateAppContext);
  const usersService = useService(UsersServices);

  const fetchUsers = useCallback(async () => {
    try {
      const fetched = await usersService.fetchUsers();
      setData(fetched.data)
    } catch(e) {
      setError("Sorry, there's a problem and I can't fetch the data right now");
    } finally {
      setLoading(false)
    }
  }, [setError, setLoading, usersService])

  useEffect(() => {
    setLoading(true)
    fetchUsers()
  }, [fetchUsers, setLoading]);
  
  return {
    data
  }
}