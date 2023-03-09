import React, {useState, useEffect, useRef} from "react";
import {IoCloseCircleSharp} from "react-icons/io5";
import {Button} from "react-bootstrap";

type Props = {
    children?: any;
    className: any;
    titleClasses: any;
    title?: string
    canClose?: boolean
};

type Pos = { x: number; y: number };

const Draggable = (props: Props) => {
    const [pos, setPos] = useState({} as Pos);
    const [dragging, setDragging] = useState(false);
    const [rel, setRel] = useState<{ x: number; y: number } | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            if (!dragging) return;
            const padding = 10;
            const x = e.pageX - (rel?.x ?? 0);
            const y = e.pageY - (rel?.y ?? 0);
            const modalWidth = modalRef.current?.offsetWidth ?? 0;
            const modalHeight = modalRef.current?.offsetHeight ?? 0;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            setPos({
                x: Math.min(
                    Math.max(x, padding),
                    windowWidth - modalWidth - padding
                ),
                y: Math.min(
                    Math.max(y, padding),
                    windowHeight - modalHeight - padding
                ),
            });
            e.stopPropagation();
            e.preventDefault();
        };

        const onMouseUp = (e: MouseEvent) => {
            setDragging(false);
            e.stopPropagation();
            e.preventDefault();
        };

        if (dragging) {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        } else {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        }

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };
    }, [dragging, rel]);

    const onMouseDown = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        bringToFront();
        if (e.button !== 0) return;
        setDragging(true);
        setRel({
            x: e.pageX - e.currentTarget.getBoundingClientRect().left,
            y: e.pageY - e.currentTarget.getBoundingClientRect().top,
        });
        e.stopPropagation();
        e.preventDefault();
    };

    const bringToFront = () => {
        const draggables = document.getElementsByClassName('draggable');
        let maxZIndex = 0;
        for (let i = 0; i < draggables.length; i++) {
            const zIndex = parseInt((draggables[i] as HTMLElement).style.zIndex || "0");
            if (zIndex > maxZIndex) {
                maxZIndex = zIndex;
            }
        }
        modalRef.current!.style.zIndex = (maxZIndex + 1).toString();
    };

    return (
        <div
            className={`${props.className} draggable`}
            style={{left: pos.x + "px", top: pos.y + "px"}}
            onMouseDown={bringToFront}
            ref={modalRef}
        >
            <div onMouseDown={onMouseDown}
                 style={{background: '#0275D8', cursor: 'pointer'}}
            >
                <div className={props.canClose ? `d-flex flex-row justify-content-between` : ''}
                     style={{color: '#fff', fontSize: '16px', padding: '5px 10px'}}>
                    <p className={props.titleClasses} style={{margin: '0'}}>
                        {props.title}
                    </p>
                    {props.canClose && <Button variant="link" className="rounded-circle p-0 m-0"
                                               onClick={() => alert('closing window')}>
                        <IoCloseCircleSharp style={{fontSize: '22px', color: 'red'}}/>
                    </Button>}
                </div>
            </div>
            <div className="pt-3 pb-0">
                {props.children}
            </div>
        </div>
    );
};

export default Draggable;