import React from "react";
import BinCards from "../components/BinCards";

const binsArray = [
    {
        code: "123",
        location: "Manipal University",
        lat: "123",
        long: "3210",
        filled: "2",
    },
    {
        code: "123",
        location: "Manipal University",
        lat: "123",
        long: "3210",
        filled: "2",
    }, 
    
];

const Bins = () => {
    return (
        <>
            {binsArray.map((bin, ind) => {
                return <BinCards bin={bin} />;
            })}
        </>
    );
};

export default Bins;
