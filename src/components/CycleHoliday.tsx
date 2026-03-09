import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "birthday" | "halloween" | "christmas" | "thanksgiving" | "valentines";

const emojis: Record<Holiday, string> = {
    birthday: "🎂",
    halloween: "🎃",
    christmas: "🎄",
    thanksgiving: "🦃",
    valentines: "❤️",
};

const nextAlphabet: Record<Holiday, Holiday> = {
    birthday: "christmas",
    christmas: "halloween",
    halloween: "thanksgiving",
    thanksgiving: "valentines",
    valentines: "birthday",
};

const nextYear: Record<Holiday, Holiday> = {
    valentines: "birthday",
    birthday: "halloween",
    halloween: "thanksgiving",
    thanksgiving: "christmas",
    christmas: "valentines",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("birthday");

    function advanceAlphabetically(): void {
        setHoliday(nextAlphabet[holiday])
    }

    function advanceYearly(): void {
        setHoliday(nextYear[holiday])
    }

    return <div>
        <p>Holiday: {emojis[holiday]}</p>

        <Button onClick={advanceAlphabetically}>Advance Alphabetically</Button>
        <Button onClick={advanceYearly}>Advance Yearly</Button>
    </div>;
}
