import React, { useState } from "react";
import { Form, Button } from "react-bootstrap"

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3)
    const [request, setRequest] = useState<string>("")

    function useAttempts():void {
        setAttempts(attempts - 1);
    }

    function addAttempts():void {
        const value = parseInt(request)

        if(!isNaN(value)) {
            setAttempts(attempts + value)
        }
    }

    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }

    return (
        <div>
            <h3>Give Attempts</h3>

            <p>Attempts Left: {attempts}</p>

            <Form.Group>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={updateRequest}
                    placeholder="Enter Attempt Amount"
                />
            </Form.Group>

            <Button onClick={useAttempts} disabled={attempts === 0}>
                Use
            </Button>

            <Button onClick={addAttempts}>
                Gain
            </Button>
        </div>
    );
}
