import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    const [t, setT] = useState<boolean>(true);
    return (
        <div>
            <Button onClick={() => setT(!t)}>Change Type</Button>
            {(t && <div>Multiple Choice</div>) ||
                (!t && <div>Short Answer</div>)}
        </div>
    );
}
