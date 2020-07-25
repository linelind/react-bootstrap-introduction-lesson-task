import React from "react";
import Table from "react-bootstrap/Table";

function UsersTable() {
    return (
        <>
            <h2>Users</h2>
            <Table striped bordered responsive>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Speciality</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2</td>
                        <td>Tincidut</td>
                        <td>Tincidut@email.com</td>
                        <td>Oslo</td>
                        <td>Cows</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tincidut</td>
                        <td>Tincidut@email.com</td>
                        <td>Oslo</td>
                        <td>Cows</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tincidut</td>
                        <td>Tincidut@email.com</td>
                        <td>Oslo</td>
                        <td>Cows</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tincidut</td>
                        <td>Tincidut@email.com</td>
                        <td>Oslo</td>
                        <td>Cows</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default UsersTable;
