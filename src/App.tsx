import React from "react";
import "./App.css";
import lebron from './you_are_my_sunshine.jpg';
import {Button, Container, Row, Col} from 'react-bootstrap';

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Hello World Kyle Fernandez UD CISC275 with React Hooks and
                TypeScript
                <h1>This is my first header</h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "20px",
                                width: "550px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <img
                            src={lebron}
                            alt="If there's no image, this text will show"
                        />
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: "20px",
                                width: "550px",
                                backgroundColor:"red"
                            }}
                        ></div>
                        <ul>
                            <li>First Thing</li>
                            <li>Second Thing</li>
                            <li>Third Thing</li>
                        </ul>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
