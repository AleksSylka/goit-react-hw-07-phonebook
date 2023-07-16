import { useDispatch, useSelector } from "react-redux"
import css from "../FormInput/FormInput.module.css"
import { setQueryFilter, toggleStatusFilter } from "redux/filterSlice";
import { getFiltersContacts, getFiltersStatus } from "redux/selectors";
import { Button } from "components/Button/Button.styled";

export const FilterForm = () => {
    const dispatch = useDispatch();

    const filter = useSelector(getFiltersContacts);
    const handleChange = (event) => {
        dispatch(setQueryFilter(event.currentTarget.value));
    }

    const filterStatus = useSelector(getFiltersStatus);
    const handleToggleFilter = () => {
        console.log(filterStatus);
        dispatch(toggleStatusFilter(!filterStatus));
    }

    return (
        <div className={css["block-filter"]}>
            <Button type="button" onClick={handleToggleFilter}>{filterStatus ? ("Hide Filter") : ("Show Filter")}</Button>
            {filterStatus && (<>
            <p className={css["title-filter"]}>Find contacts by name</p>
            <label className={css["label-contacts"]}>
                <input
                type="text"
                name="filter"
                value={filter}
                onChange={handleChange}
                className={css["input-contacts"]}
                />
            </label></>)}
        </div>
    )
}