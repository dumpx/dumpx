import React, { useState, useEffect } from "react";
import BinCards from "../components/BinCards";
import "../components/animation/loading.css";
import styled from 'styled-components';

import { supabase } from "../supabase";

import EmptyCanvas from '../assets/empty.svg';

const EmptyDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2rem;
    height: 100%
`;

const Bins = () => {
    const [binsArray, setBinsArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);
    // const [sortManner, setSortManner] = useState(null);

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
        setIsEmpty(Bins.length === 0 ? true : false);
        // console.log(Bins, error);
    };

    // const sortBy = (e) => {console.log("Sort by: ",e)};
    // console.log(sortManner);

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
                <EmptyDiv>
                    <img src={EmptyCanvas} alt="empty" style={{width: "25%"}} />
                    <p>
                        No bin found ! Try adding some.
                    </p>
                </EmptyDiv>
            )}
            {/* {!isEmpty && (
                <>
                    <label for="gender"> Select you gender</label>
                    <select name="gender" value={sortManner} onChange={setSortManner}>
                        <option value="none" selected>
                            Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">other</option>
                    </select>
                </>
            )} */}
            {binsArray.map((bin) => {
                return <BinCards bin={bin} key={bin.id} />;
            })}
        </>
    );
};

export default Bins;
