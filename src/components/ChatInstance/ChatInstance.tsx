import React, {useState, useEffect, useRef} from "react";
import Style from "./ChatInstance.module.css";
import Draggable from "@/components/Abstract/Draggable";

type Props = {
    withUser: string;
};

const ChatInstance = (props: Props) => {
    return (
        <Draggable title={`Chat with ${props.withUser}`} className={Style['chat-draggable']}
                   canClose={true}
                   titleClasses={Style['chat-title']}>
        </Draggable>
    );
};

export default ChatInstance;