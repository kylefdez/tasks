import React, { useState } from "react";
import { Form } from "react-bootstrap"

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [name, setName] = useState<string>("Your Name")
    const [isStudent, setStudent] = useState<boolean>(true)

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>

            <Form.Check
                type="switch"
                id="edit-mode-check"
                label="Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode ?
                <div>
                    <Form.Group controlId="formUserName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={updateName}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        label="Student"
                        id="is-student-checkbox"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                </div>
            :   <div>
                    {name} {isStudent ? "is a student" : "is not a student"}
                </div>
            }
        </div>
    );
}
