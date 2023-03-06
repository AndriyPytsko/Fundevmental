import { Button } from "../../styles/globalStyles";
import { addNewPerson } from "../../store/reducer/reducer";
import { useDispatch } from "react-redux";

function AddNewPerson(props) {
  const { data } = props;

  const dispatch = useDispatch();

  const createNewPerson = () => {
    dispatch(
      addNewPerson({
        name: "",
        age: "",
        hobby: "",
        isNewPerson: true,
      })
    );
  };

  return data[data.length - 1].isNewPerson ? null : (
    <Button onClick={createNewPerson}>Add new</Button>
  );
}

export default AddNewPerson;
