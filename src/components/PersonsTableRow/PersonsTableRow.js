import { Input } from "./styled";
import { useState } from "react";
import ButtonBlock from "./ButtonBlock/ButtonBlock";

function PersonsTableRow(props) {
  const { person } = props;

  const [editState, setEditState] = useState({
    isEdit: Boolean(person.isNewPerson),
    editPerson: {
      ...person,
    },
  });

  const onChange = (e) => {
    setEditState((prevState) => ({
      isEdit: true,
      editPerson: {
        ...prevState.editPerson,
        [e.target.name]: e.target.value,
      },
    }));
  };

  return (
    <tr>
      <td>{editState.editPerson.id}</td>
      <td>
        <Input
          value={editState.editPerson.name}
          name="name"
          onChange={onChange}
          readOnly={!editState.isEdit}
        />
      </td>
      <td>
        <Input
          value={editState.editPerson.age}
          name="age"
          onChange={onChange}
          readOnly={!editState.isEdit}
        />
      </td>
      <td>
        <Input
          value={editState.editPerson.hobby}
          name="hobby"
          onChange={onChange}
          readOnly={!editState.isEdit}
        />
      </td>
      <ButtonBlock
        person={person}
        editState={editState}
        setEditState={setEditState}
      />
    </tr>
  );
}

export default PersonsTableRow;
