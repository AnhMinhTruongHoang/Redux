import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/counter/hooks";
import { fetchListUser } from "../redux/user/user.slice";
import { toast } from "react-toastify";

/////////////////////
function UsersTable() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.listUsers);

  useEffect(() => {
    dispatch(fetchListUser());
    toast("🦄 Wow so easy!");
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th> ID</th>
          <th> Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td> {user.email} </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default UsersTable;
