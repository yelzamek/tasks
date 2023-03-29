import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequired, setAttemptsRequired] = useState<string>("0");
    const attemptsRequiredInt = parseInt(attemptsRequired) || 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            Attempts Left: {attemptsLeft}
            <Form.Group>
                <Form.Control
                    type="number"
                    value={attemptsRequired}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsRequired(event.target.value)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                disabled={attemptsLeft == 0}
            >
                Use
            </Button>
            <Button
                onClick={() =>
                    setAttemptsLeft(attemptsLeft + attemptsRequiredInt)
                }
            >
                Gain
            </Button>
        </div>
    );
}
