import {ReactNode, FC, ReactHTMLElement} from 'react';
import { useDrag } from 'react-dnd';
import {SimpleWIdget} from '../Interfaces';

interface DragMenuWidgetProps {
    children?: ReactNode;
    type: string;
    item: any;
    text?: string;
    style?: string;
    hideWhenDrag?: Function;
    state?: any;
    typeElement?: string;
}

const DragMenuWidget: FC<DragMenuWidgetProps> = ({ children, type, item, text, style, hideWhenDrag, state, typeElement }) => {
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
            <span>{text}</span>
            {/* {children} */}
        </span>
    )
}

export default DragMenuWidget;