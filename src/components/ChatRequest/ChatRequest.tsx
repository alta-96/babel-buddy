import React, { useState, useEffect, useRef } from "react";
import Style from "./ChatRequest.module.css";
import Draggable from "@/components/Abstract/Draggable";
import Button from "react-bootstrap/Button";
import {BsFillCheckCircleFill, BsFillDashCircleFill} from "react-icons/bs";

type Props = {
    invitationFrom: string;
};

const ChatRequest = (props: Props) => {
    return (
        <Draggable title="Incoming Chat Invitation" className={Style['chat-draggable']} titleClasses={Style['chat-title']}>
            <p className={Style['chat-body']}> {props.invitationFrom} has invited you to start a conversation</p>
            <div className="flex-row d-flex justify-content-around">
                <Button variant="danger"> <BsFillDashCircleFill /> Decline</Button>
                <Button variant="success"> <BsFillCheckCircleFill /> Accept</Button>
            </div>
        </Draggable>
    );
};

export default ChatRequest;