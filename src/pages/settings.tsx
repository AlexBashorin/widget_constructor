import {FC} from 'react';
import Nav from './Nav';
import MainSettings from './Settings/modules/MainSettings';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface SettingsProps {

}

const Setiings = () => {
    return (
        <Nav>
            <MainSettings />
        </Nav>
    )
}

export default Setiings