import React from "react";
import { BinVisuals } from "./styles";

const BinVisualBox = ({ height, lFromArd }) => {
    const depth =
        Number(lFromArd) > Number(height) ? Number(height) : Number(lFromArd);
    const fillHeight = (((Number(height) - depth) / depth) * 100).toFixed(1);
    const color = "#0f0";

    return (
        <BinVisuals>
            <div>
                <div
                    style={{
                        backgroundColor: color,
                        height: `${fillHeight}%`,
                    }}
                ></div>
            </div>
            <p>Filled: {fillHeight}%</p>
        </BinVisuals>
    );
};

export default BinVisualBox;
