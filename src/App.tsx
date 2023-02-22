import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import yasmin_face from "./img/yasmin-face.jpg";
import ra_pic from "./img/ra_pic.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <h1 className="header-text">This is header text!</h1>
            </header>
            <p>
                Hello World! Edit <code>src/App.tsx</code> and save. This page
                will automatically reload. Yasmeen Hello World
            </p>
            Unordered list:
            <div className="list">
                <ul>
                    <li>eggs</li>
                    <li>milk</li>
                    <li>butter</li>
                </ul>
            </div>
            Ordered List:
            <div className="list">
                <ol>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                </ol>
            </div>
            <img className="face-img" src={yasmin_face} alt="my linkedin pfp" />
            {/* Doesn't actually log hello world anywhere... */}
            <Button>Log Hello World={() => console.log("Hello World")}</Button>
            <div>
                <Container>
                    <Row>
                        <Col>
                            First column. This column is supposed to have some
                            content to show that it stays in its own column on
                            its own side of the screen.
                            <div className="red-rect"></div>
                        </Col>
                        <Col>
                            Second column. Anything can go in here. I could try
                            adding an image in here just to see that it would
                            stay on its own half of the screen also. We will
                            see.
                            <div className="red-rect"></div>
                            <img
                                className="ra_pic"
                                src={ra_pic}
                                alt="photo I use as an RA"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
