import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎉");

    function nextHolidayByDate(): void {
        if (holiday === "🎉") {
            setHoliday("🌙");
        } else if (holiday === "🌙") {
            setHoliday("🐄");
        } else if (holiday === "🐄") {
            setHoliday("👸");
        } else if (holiday === "👸") {
            setHoliday("🎆");
        } else if (holiday === "🎆") {
            setHoliday("🎉");
        }
    }

    function emojiMeanings(): string {
        if (holiday === "🎉") {
            return "My birthday";
        } else if (holiday === "🌙") {
            return "Ramadan";
        } else if (holiday === "🐄") {
            return "Eid";
        } else if (holiday === "👸") {
            return "Mother's Day";
        } else if (holiday === "🎆") {
            return "Fourth of July";
        }
        return "";
    }

    function nextHolidayByAlphabet(): void {
        if (holiday === "🐄") {
            setHoliday("🎆");
        } else if (holiday === "🎆") {
            setHoliday("👸");
        } else if (holiday === "👸") {
            setHoliday("🎉");
        } else if (holiday === "🎉") {
            setHoliday("🌙");
        } else if (holiday === "🌙") {
            setHoliday("🐄");
        }
    }
    return (
        <div>
            <div>
                Holiday: {emojiMeanings()} {holiday}
            </div>
            <div>
                <Button onClick={() => nextHolidayByAlphabet()}>
                    Advance By Alphabet
                </Button>
                <Button onClick={() => nextHolidayByDate()}>
                    {" "}
                    Advance By Year
                </Button>
            </div>
            Cycle Holiday
        </div>
    );
}
