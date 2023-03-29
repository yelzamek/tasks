import { cpuUsage } from "process";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "white",
        "black",
        "magenta",
        "cyan"
    ];
    const default_color = COLORS[0];
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [color, setColor] = useState<string>(default_color);
    function updateColor(event: ChangeEvent) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((currColor: string) => (
                    <Form.Check
                        inline
                        key={currColor}
                        name="colors"
                        type="radio"
                        label={currColor}
                        value={currColor}
                        id="color-options-radio-buttons"
                        checked={currColor === color}
                        onChange={updateColor}
                        style={{ backgroundColor: currColor }}
                    ></Form.Check>
                ))}
            </div>
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}.
                </span>
            </div>
        </div>
    );
}
