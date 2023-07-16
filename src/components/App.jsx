import { useDispatch, useSelector } from "react-redux";
import { BlockContacts } from "./ListContacts/ListContacts";
import { Title } from "./TitleComponent/Title.styled";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { FormInput } from "./FormInput/FormInput";
import { FilterForm } from "./FilterForm/FilterForm";
import { getError, getIsLoading } from "redux/selectors";
import { Loader } from "./Loader/Loader";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Title>PHONEBOOK</Title>
      <FormInput />
      <FilterForm />
      {!error && <Loader isLoading={isLoading} />}
      <BlockContacts/>
    </>
  );
};
