import React, { useState, useEffect } from "react";
import BinCards from "../components/BinCards";
import "../components/animation/loading.css";

import { supabase } from "../supabase";

const Bins = () => {
    const [binsArray, setBinsArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);

    const fetchBins = async () => {
        setIsLoading(true);
        let { data: Bins, error } = await supabase
            .from("Bins")
            .select("*")
            .range(0, 9);
        if (error) {
            alert("Could not get bin details !!");
            return;
        }
        setBinsArray(Bins);
        setIsLoading(false);
        setIsEmpty(Bins.length ===0 ? true: false);
        console.log(Bins, error);
    };

    useEffect(() => {
        fetchBins();
    }, []);

    return (
        <>
            {isLoading && (
                <div className="loadingio-spinner-dual-ball-6kv0uz8q3c4">
                    <div className="ldio-rlr8ahn6u">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )}
            {isEmpty && (
                <h3>No bin found ! Try adding some.</h3>
            )}
            {binsArray.map((bin) => {
                return <BinCards bin={bin} key={bin.id} />;
            })}
        </>
    );
};

export default Bins;
