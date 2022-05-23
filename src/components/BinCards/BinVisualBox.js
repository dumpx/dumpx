import React from "react";
import { BinVisuals } from "./styles";

const BinVisualBox = ({ height, lFromArd }) => {
    const depth =
        Number(lFromArd) > Number(height) ? Number(height) - (Number(lFromArd)-Number(height)) : Number(lFromArd);
    let fillHeight = (((Number(height) - depth) / Number(height)) * 100).toFixed(1);
    fillHeight = fillHeight > 100 ? 100 : fillHeight;
    fillHeight = fillHeight < 0 ? 0 : fillHeight;
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
