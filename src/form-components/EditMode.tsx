import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
    const [editMode, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateName(event: ChangeEvent) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="switch-edit-mode"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={() => setMode(!editMode)}
                ></Form.Check>
                {editMode && (
                    <Form.Check
                        type="switch"
                        id="switch-student"
                        label="Is this user a student?"
                        checked={isStudent}
                        onChange={() => setIsStudent(!isStudent)}
                    ></Form.Check>
                )}
            </div>
            <div>
                {editMode && (
                    <Form.Group controlId="formStudentName">
                        <Form.Label>Enter Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={updateName}
                        ></Form.Control>
                    </Form.Group>
                )}
            </div>
            <div>
                {name} {isStudent ? "is" : "is not"} {"a student"}
            </div>
        </div>
    );
}
