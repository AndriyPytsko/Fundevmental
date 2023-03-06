import { CancelButton, DeleteButton, EditButton, SaveButton } from "../styled";
import {
  deletePerson,
  saveNewPerson,
  updatePerson,
} from "../../../store/actions/actions";
import { deleteNewPerson } from "../../../store/reducer/reducer";
import { useDispatch } from "react-redux";

function ButtonBlock(props) {
  const { editState, setEditState, person } = props;

  const dispatch = useDispatch();

  const setEditMode = (isEdit) => {
    setEditState((prevState) => ({
      ...prevState,
      isEdit,
    }));
  };

  const cancelCreateNewPerson = () => {
    dispatch(deleteNewPerson());
  };

  const createNewPerson = () => {
    delete editState.editPerson.isNewPerson;
    dispatch(saveNewPerson(editState.editPerson)).then(() =>
      setEditMode(false)
    );
  };

  const cancelEdit = () => {
    setEditState({
      isEdit: false,
      editPerson: {
        ...person,
      },
    });
  };

  const saveEditPerson = () => {
    dispatch(updatePerson(editState.editPerson)).then(() => setEditMode(false));
  };

  return (
    <td>
      {editState.isEdit ? (
        <>
          <SaveButton
            onClick={person.isNewPerson ? createNewPerson : saveEditPerson}
          >
            Save
          </SaveButton>
          <CancelButton
            onClick={person.isNewPerson ? cancelCreateNewPerson : cancelEdit}
          >
            Cancel
          </CancelButton>
        </>
      ) : (
        <>
          <EditButton onClick={() => setEditMode(true)}>Edit</EditButton>
          <DeleteButton onClick={() => dispatch(deletePerson(person.id))}>
            Delete
          </DeleteButton>
        </>
      )}
    </td>
  );
}

export default ButtonBlock;
