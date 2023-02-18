import {ReactNode, FC, ReactHTMLElement} from 'react';
import { useDrag } from 'react-dnd';
import {SimpleWIdget} from '../Interfaces';

interface Draggable {
    children?: ReactNode;
    type: string;
    item: any;
    text?: string;
    style?: string;
    hideWhenDrag?: Function;
    state?: any;
    typeElement?: string;
}

const Draggable: FC<Draggable> = ({ children, type, item, text, style, hideWhenDrag, state, typeElement }) => {
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type,
            item,
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging(),
            }),
        }),
        [state]
    );
    if (isDragging && hideWhenDrag) {
        return <div ref={drag}></div>
    }

    return (
        <span
            ref={drag}
            className={style}
        >   
            <input type={typeElement} />
        </span>
    )
}

export default Draggable;