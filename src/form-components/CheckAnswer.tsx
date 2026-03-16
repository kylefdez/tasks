import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
     const [answer, setAnswer] = useState<string>("");

     function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
     }
    return (
        <div>
            <Form.Group>
                <Form.Control
                    type="text"
                    value={answer}
                    onChange={updateAnswer}
                    placeholder="Enter your answer"
                />
            </Form.Group>

            <span>{answer === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
