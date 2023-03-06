import { useDispatch, useSelector } from "react-redux";
import { selectPersons } from "../../store/reducer/reducer";
import { getPersons } from "../../store/actions/actions";
import { useEffect } from "react";
import PersonsTableRow from "../PersonsTableRow/PersonsTableRow";
import { Table, Th, Container, Loader } from "./styled";
import AddNewPerson from "../AddNewPerson/AddNewPerson";

function PersonsTable() {
  const persons = useSelector(selectPersons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPersons());
  }, []);

  if (persons.loading) return <Loader>Loading...</Loader>;

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>Hobby</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {persons.data.map((person, index) => (
            <PersonsTableRow key={person.id || index} person={person} />
            //bad practise add index as a key
          ))}
        </tbody>
      </Table>
      <AddNewPerson data={persons.data} />
    </Container>
  );
}

export default PersonsTable;
