import React, {useState, useEffect, useRef} from "react";
import Style from "./ChatInstance.module.css";
import Draggable from "@/components/Abstract/Draggable";
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {RiSendPlane2Fill} from "react-icons/ri";

type Props = {
    windowId: string,
    withUser: string,
    handleCloseWindow: Function
};

const ChatInstance = (props: Props) => {

    const [message, setMessage] = useState('');
    const [translatorSelected, setTranslatorSelected] = useState(true);

    const handleMessageChange = (e: any) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = (e: any) => {
        e.preventDefault();
        alert("sending");
    };

    return (
        <Draggable
            windowId={props.windowId}
            title={`Chat with ${props.withUser}`}
            className={Style['chat-draggable']}
            canClose={true}
            titleClasses={Style['chat-title']}
            closeWindow={(id: string) => props.handleCloseWindow(id)}>
            <div className="m-1 my-0 py-0 bg-secondary">
                <div className="row">
                    <div className="col-7">
                        <div className="chat-container bg-white border border-dark border-2 px-2 py-1 mb-2"
                             style={{height: '285px'}}>
                            <p>test</p>
                        </div>
                        <Form className="row" onSubmit={handleSendMessage} autoComplete="off">
                            <Form.Group className="col-11 pl-3 pr-0">
                                <Form.Control
                                    className="mx-0"
                                    type="text"
                                    placeholder="Type your message here"
                                    value={message}
                                    onChange={handleMessageChange}
                                />
                            </Form.Group>
                            <div className="col-1 px-0 mx-0">
                                <Button variant="link" className={Style['send-btn']} onClick={handleSendMessage}>
                                    <RiSendPlane2Fill className="text-white"/>
                                </Button>
                            </div>
                        </Form>
                    </div>

                    <div className="col-5 px-1">
                        <div className={Style['support-tool-container']} style={{height: '328px'}}>
                            <div>
                                <Button className="w-50 rounded-0 border-dark btn-sm"
                                        style={{background: translatorSelected ? '#0B6CBF' : ''}}
                                        onClick={() => setTranslatorSelected(true)}
                                >Translate</Button>
                                <Button className="w-50 rounded-0 border border-dark btn-sm"
                                        style={{background: !translatorSelected ? '#0B6CBF' : ''}}
                                        onClick={() => setTranslatorSelected(false)}
                                >Voice</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Draggable>
    );
};

export default ChatInstance;