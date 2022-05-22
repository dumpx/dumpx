import React from "react";
import { BinVisuals } from "./styles";

const BinVisualBox = ({ color, height }) => {
    return (
        <BinVisuals>
            <div>
                <div
                    style={{
                        backgroundColor: color,
                        height: `${height}%`,
                    }}
                ></div>
            </div>
            <p>Filled: {height}%</p>
        </BinVisuals>
    );
};

export default BinVisualBox;
