import React from 'react';
import './App.css';
import Input from "./Components/Input/Input";
import Button from "./Components/Button/Button";
import Checkbox from "./Components/CheckBox/Checkbox";
import NotFound from "./Components/NotFound/NotFound";

function App() {
    return <div>
        <Input/>
        <Button>Button</Button>
        <Checkbox/>
        <NotFound/>
    </div>
}

export default App;
