import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function makeQuestion(type, title, answer, options) {
    return {
        type: type,
        title: title,
        answer: answer,
        options: options,
    }
}

export const OpenQuestionModal = (args) => {
    const [title, setTitle] = useState("");

    return (
        <Modal show={args.show} onHide={args.onHide} size="lg" centered>
            <Modal.Header style={{background: "var(--dark)", color: "var(--light)", border: "0"}}>
                <Modal.Title>Nueva pregunta abierta</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "var(--dark)", color: "var(--light)", border: "0"}}>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text style={{background: "var(--dark)", color: "var(--light)", border: "0"}}>
                            Digite su pregunta
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id={"question"}
                                 style={{background: "var(--light)", color: "var(--dark)", borderRadius: "1rem"}}
                                 onChange={({target}) => setTitle(target.value)}/>
                </InputGroup>
            </Modal.Body>
            <Modal.Footer style={{background: "var(--dark)", color: "var(--light)", border: "0"}}>
                <Button variant={"outline-light"} onClick={() => {
                    args.pushQuestion(makeQuestion("OPEN", title, "Answer 1", []));
                    args.onHide();
                }}>Guardar</Button>
                <Button variant={"outline-light"} onClick={args.onHide}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export const OptionsQuestionModal = (args) => {

    const [showError, setShowError] = useState(false);
    const [title, setTitle] = useState("");
    const [options, setOptions] = useState([]);

    function resetModal() {
        setShowError(false);
        setTitle("");
        setOptions([]);
        args.onHide()
    }

    function makeOption(title, correct) {
        return {
            title: title,
            correct: correct
        };
    }

    function drawOption(index, option) {
        return (
            <InputGroup key={index} className={"my-2"}>
                <InputGroup.Prepend>
                    <InputGroup.Radio name={"options_radios"}
                                      onChange={({target}) => {
                                          option.correct = target.checked;
                                      }}/>
                </InputGroup.Prepend>
                <FormControl placeholder={"Opción"} onChange={({target}) => option.title = target.value}/>
            </InputGroup>
        );
    }

    return (
        <Modal show={args.show} onHide={resetModal} size="lg" centered>
            <Modal.Header style={{background: "var(--dark)", color: "var(--light)", border: "0"}}>
                <Modal.Title>Nueva pregunta de opción múltiple</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background: "var(--dark)", color: "var(--light)", border: "0"}}>
                <Row className="mb-4">
                    <Col/>
                    <Col>
                        <Toast show={showError} onClose={() => setShowError(false)} className="bg-transparent">
                            <Toast.Header className="bg-danger text-light border-0">
                                <strong className="mr-auto">Error</strong>
                            </Toast.Header>
                            <Toast.Body className="bg-danger text-light">
                                La pregunta debe tener al menos 2 opciones y una de ellas debe estar seleccionada
                            </Toast.Body>
                        </Toast>
                    </Col>
                </Row>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text style={{background: "var(--dark)", color: "var(--light)", border: "0"}}>
                            Digite su pregunta
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id={"question"}
                                 style={{background: "var(--light)", color: "var(--dark)", borderRadius: "1rem"}}
                                 onChange={({target}) => setTitle(target.value)}/>
                </InputGroup>
                {
                    options.map((option, index) => drawOption(index, option))
                }
            </Modal.Body>
            <Modal.Footer style={{background: "var(--dark)", color: "var(--light)", border: "0"}}>
                <Button variant={"outline-light"} onClick={() => setOptions([...options, makeOption("", false)])}>
                    Agregar opción
                </Button>
                <Button variant={"outline-light"} disabled={false} onClick={() => {
                    if (options.length > 1) {
                        let finish = options.find(option => option.correct === true);
                        if (finish) {
                            args.pushQuestion(makeQuestion("OPTIONS", title, "", options));
                            resetModal();
                        } else {
                            setShowError(true);
                        }
                    } else {
                        setShowError(true);
                    }
                }}>Guardar</Button>
                <Button variant={"outline-light"} onClick={resetModal}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    );
};
