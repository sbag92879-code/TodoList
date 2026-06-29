import "./Editor.css"
import { useState } from "react";

const Editor = ({ onCreate }) => {

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const [content, setContent] = useState("");

    const onsubmit = () => {
        onCreate()
    };


    return (
        <div className="Editor">
            <input value={content}
                onChange={onChangeContent}
                placeholder="새로운 Todo..." />
            <button onClick={onsubmit}>추가</button>
        </div>
    );
};

export default Editor;