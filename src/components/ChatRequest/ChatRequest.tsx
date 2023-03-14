import React, { useState, useEffect, useRef } from "react";
import Style from "./ChatRequest.module.css";
import Draggable from "@/components/Abstract/Draggable";
import Button from "react-bootstrap/Button";
import {BsFillCheckCircleFill, BsFillDashCircleFill} from "react-icons/bs";
import {ChatRequestResponse} from "@/models/chat-request/ChatRequestResponse";

type Props = {
    requestResponse: Function,
    fromUser: string;
    windowId: string
};

const ChatRequest = (props: Props) => {
    const emitResponse = (response: number) => {
        props.requestResponse({
            response, 
            windowId: props.windowId,
            fromUser: props.fromUser
        } as ChatRequestResponse);
    }
    
    return (
        <Draggable
            windowId={props.windowId}
            closeWindow={() => emitResponse(0)}
            title="Incoming Chat Invitation"
            className={Style['chat-draggable']}
            titleClasses={Style['chat-title']}>
            <p className={Style['chat-body']}> {props.fromUser} has invited you to start a conversation</p>
            <div className="flex-row d-flex justify-content-around">
                <Button variant="danger" onClick={() => emitResponse(0) }> <BsFillDashCircleFill /> Decline</Button>
                <Button variant="success" onClick={() => emitResponse(1) }> <BsFillCheckCircleFill /> Accept</Button>
            </div>
        </Draggable>
    );
};

export default ChatRequest;