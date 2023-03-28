import { useContext, useEffect, useState, useCallback } from "react";
import { useService } from './useServices';
import TransactionsServices from '../services/transactions';
import { StateAppContext } from "../providers/stateApp";

export const useTransaction = () => {
  const [ data, setData ] = useState([]);
  const { setLoading, setError } = useContext(StateAppContext);
  const transactionsService = useService(TransactionsServices);

  const fetchTranslations = useCallback(async () => {
    try {
      const fetched = await transactionsService.fetchTranslations();
      setData(fetched.data);
    } catch(e) {
      setError("Sorry, there's a problem and I can't fetch the data right now");
    } finally {
      setLoading(false);
    }
  }, [setError, setLoading, transactionsService])

  const filterTransactions =  useCallback((id) => data.filter(item => item.customer_id === id), [data]);

  useEffect(() => {
    setLoading(true)
    fetchTranslations();
  }, [fetchTranslations, setLoading]);
  
  return {
    data,
    filterTransactions,
    fetchTranslations
  }
}