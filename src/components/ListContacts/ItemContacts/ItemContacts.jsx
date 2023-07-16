import { AiOutlinePhone, AiFillDelete } from "react-icons/ai"
import { ItemContact, ItemText } from "./ItemContacts.styled"
import { ButtonDelete } from "components/Button/Button.styled"
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";

export const ItemContactBlock = ({ name, phone, id }) => {

    const dispatch = useDispatch();
    
    const handleDelete = event => {
        dispatch(deleteContact(event.currentTarget.value));
    }
    return (
        <>
                <ItemContact>
                    <ItemText><b>{name}</b></ItemText>
                    <ItemText><AiOutlinePhone />{phone}</ItemText>
                    <ButtonDelete type="button" onClick={handleDelete} value={id}><AiFillDelete/></ButtonDelete>
                </ItemContact>
        </>
    )
}