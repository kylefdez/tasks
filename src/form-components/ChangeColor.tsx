import React, { useState } from "react";
import { Form } from "react-bootstrap"

const COLORS = ["red", "blue", "green", "orange", "purple", "cyan", "magenta", "white", "black"];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>

            {COLORS.map((c) => (
                <Form.Check
                    key={c}
                    inline
                    type="radio"
                    label={c}
                    value={c}
                    checked={color === c}
                    onChange={updateColor}
                    name="colors"
                />
            ))}

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    padding: "10px",
                    marginTop: "10px",
                    display: "inline-block",
                }}
            >
                You have chosen {color}.
            </div>
        </div>
    );
}
