import React, { Fragment, useState } from "react";
import { FormContainer, FormInput, FormBox, InputButton } from "./styles";

import { supabase } from "../../supabase";

const Form = () => {
    const [binCode, setBinCode] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");
    const [loading, setLoading] = useState(false);

    const createPost = async (e) => {
        e.preventDefault();
        setLoading(true);

        if(!binCode.trim() || !location.trim()|| !description.trim()|| !lat.trim()|| !long.trim()){
            alert("Please enter data correctly !");
            setLoading(false);
            return;
        }

        const { data, error } = await supabase.from("Bins").insert([
            {
                code: binCode,
                location: location,
                description: description,
                latitude: lat,
                longitude: long,
            },
        ]);

        if (error) {
            alert(error.error_description || error.message);
        } else {
            alert("Bin added successfully !");
            clearForm();
            console.log(data);
        }
        setLoading(false);
    };

    const clearForm = () => {
        setBinCode("");
        setLocation("");
        setDescription("");
        setLat("");
        setLong("");
    }

    return (
        <Fragment>
            <FormContainer>
                <FormBox onSubmit={createPost}>
                    <label htmlFor="bin-code">Bin Code</label>
                    <FormInput
                        type="text"
                        placeholder="Enter bin code"
                        onChange={(event) => setBinCode(event.target.value)}
                        value={binCode}
                    />

                    <label htmlFor="bin-location">Bin Location</label>
                    <FormInput
                        type="text"
                        placeholder="Enter bin location"
                        onChange={(event) => setLocation(event.target.value)}
                        value={location}
                    />

                    <label htmlFor="desc">Description</label>
                    <FormInput
                        type="text"
                        placeholder="Description ..."
                        onChange={(event) => setDescription(event.target.value)}
                        value={description}
                    />

                    <label htmlFor="latitude">Latitude</label>
                    <FormInput
                        type="number"
                        min="-90"
                        max="90"
                        placeholder="Enter latitude"
                        onChange={(event) => setLat(event.target.value)}
                        value={lat}
                    />

                    <label htmlFor="longitude">Longitude</label>
                    <FormInput
                        type="number"
                        min="-180"
                        max="180"
                        placeholder="Enter longitude"
                        onChange={(event) => setLong(event.target.value)}
                        value={long}
                    />
                    {loading ? (
                        <InputButton value="submitting ..." />
                    ) : (
                        <InputButton
                            type="submit"
                            value="Submit"
                            onClick={createPost}
                        />
                    )}
                </FormBox>
            </FormContainer>
        </Fragment>
    );
};

export default Form;
