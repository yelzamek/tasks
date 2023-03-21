import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setAttempts(attempts - 1);
        setProgress(!inProgress);
    }

    return (
        <div>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={inProgress == true || attempts == 0}
                >
                    Start Quiz
                </Button>
                <Button
                    onClick={() => setProgress(!inProgress)}
                    disabled={!inProgress}
                >
                    Stop Quiz
                </Button>
                <Button
                    onClick={() => setAttempts(attempts + 1)}
                    disabled={inProgress}
                >
                    Mulligan
                </Button>
            </div>
            Number of attempts left: <span>{attempts}</span>
            <div> Start Attempt</div>
        </div>
    );
}
