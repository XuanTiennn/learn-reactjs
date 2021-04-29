import React, { useState } from "react";
import PropTypes from "prop-types";

ChangeColor.propTypes = {};

function ChangeColor(props) {
    const [color, setcolor] = useState("black");
    return (
        <div>
            {color}
            <button onClick={() => setcolor("white")}>white</button>
            <button onClick={() => setcolor("orange")}>orange</button>
        </div>
    );
}

export default ChangeColor;
