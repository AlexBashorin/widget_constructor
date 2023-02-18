import { FC, useState } from 'react';
import { useDrop } from 'react-dnd';
import Draggable from './components/Draggable';
import { SimpleWIdget } from './Interfaces';
import styles from './styles/desk.module.css';
import InputBoard from './UI/InputBoard';
import styleInput from './styles/Inputs.module.css';
import DragMenuWidget from './components/DragMenuWidgets';


const PictureList: SimpleWIdget[] = [
    {
        id: 1,
        text: "one",
        type: "string"
    },
    {
        id: 2,
        text: "two",
        type: "number"
    },
    {
        id: 3,
        text: "three",
        type: "date"
    },
];


const Desk = () => {
    // Состояние готового виджета
    const [compliteWidget, setCompliteWidget] = useState([])

    

    // DROP WIDGETS TO FIELDS, SAVE STATE
    const [board, setBoard] = useState<SimpleWIdget[]>([]);
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "dropWidget",
        drop: (item: SimpleWIdget) => {
            if(item.id) {
                addImageToBoard(item.id)
                console.log("dropItem: " + JSON.stringify(item))
            } else {
                console.log("Element ID was not set")
            }
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));
    const addImageToBoard = (id: number) => {
        const pictureList: SimpleWIdget | undefined = PictureList.find((picture) => id === picture.id);
        if(pictureList) {
            setBoard((board) => [...board, pictureList]);
        }
    };
    
    // WIDGET LIST (боковое меню виджетов)
    const [widgetList, setWidgetList] = useState(PictureList)
    const filterWidgetList = (text: string) => {
        const filteredList = PictureList.filter(e => e.text?.includes(text));
        setWidgetList(filteredList)
    };
    return (
        <div className={styles.wrapboard}>
            <div className={styles.board} ref={drop}>
                {board.map((picture) => {
                    return <Draggable
                        key={picture.id}
                        type='dropWidget'
                        text={picture.text}
                        item={picture}
                        style={styles.widgetItem}
                        typeElement={picture.type}
                    />
                })}
            </div>
            <div className={styles.listwidgets}>
                <b>widgets</b>
                <InputBoard 
                    type={"text"} 
                    placeholder={"search widgets"} 
                    style={styleInput.inputBoard} 
                    parentCallback={filterWidgetList}
                />
                {widgetList.map((picture) => {
                    return <DragMenuWidget 
                        key={picture.id}
                        type='dropWidget'
                        text={picture.text}
                        item={picture}
                        style={styles.widgetItem}
                        typeElement={picture.type}
                    />
                    // return <Draggable
                    //     key={picture.id}
                    //     type='dropWidget'
                    //     text={picture.text}
                    //     item={picture}
                    //     style={styles.widgetItem}
                    //     typeElement={picture.type}
                    // />
                })}
            </div>
        </div>
    )
}

export default Desk