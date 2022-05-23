import React, { Fragment, useState } from "react";
import {
    FormContainer,
    FormInput,
    FormBox,
    InputButton,
    GpsButton,
} from "../Registry/styles";

import DraggableMap from "../Map/DraggableMap";
import { supabase } from "../../supabase";

const UpdateForm = ({ bin }) => {
    const [binCode, setBinCode] = useState(bin.code);
    const [location, setLocation] = useState(bin.location);
    const [description, setDescription] = useState(bin.description);
    const [lat, setLat] = useState(bin.latitude);
    const [long, setLong] = useState(bin.longitude);
    const [loading, setLoading] = useState(false);
    const [thingspeak, setThingspeak] = useState(bin.thingspeak_link);
    const [height, setHeight] = useState(bin.height);

    const createPost = async (e) => {
        e.preventDefault();
        setLoading(true);
        const confirmed = window.confirm(
            "Are you sure you want to override this bin data ?"
        );
        if (!confirmed) return setLoading(false);
        try {
            if (
                !binCode.trim() ||
                !location.trim() ||
                !description.trim() ||
                !thingspeak.trim()
            ) {
                alert("Please enter data correctly !");
                setLoading(false);
                return;
            }

            const { data, error } = await supabase
                .from("Bins")
                .update({
                    code: binCode,
                    location: location,
                    description: description,
                    latitude: lat,
                    longitude: long,
                    thingspeak_link: thingspeak,
                    height: height,
                })
                .eq("thingspeak_link", thingspeak);

            if (error) {
                alert(error.error_description || error.message);
            } else {
                alert("Bin updated successfully !");
                clearForm();
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    const clearForm = () => {
        setBinCode("");
        setLocation("");
        setDescription("");
        setLat("");
        setLong("");
        setThingspeak("");
        setHeight("");
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((e) => {
                setLat(e.coords.latitude);
                setLong(e.coords.longitude);
            });
        } else {
            alert(
                "Sorry, Your browser either prevents sharing location or device does not support GPS !"
            );
        }
    };

    console.log(binCode);
    return (
        <Fragment>
            <FormContainer style={{ padding: "3rem" }}>
                <FormBox
                    onSubmit={createPost}
                    style={{
                        alignContent: "flex-start",
                        padding: "0",
                        justifyContent: "center",
                    }}
                >
                    <label htmlFor="bin-code">Bin Code</label>
                    <FormInput
                        type="text"
                        placeholder="Enter bin code"
                        onChange={(event) => setBinCode(event.target.value)}
                        value={binCode}
                    />

                    <label htmlFor="height">Bin Height (cm)</label>
                    <FormInput
                        type="number"
                        min="0"
                        max="1000"
                        placeholder="Enter Height in cms"
                        onChange={(event) => setHeight(event.target.value)}
                        value={height}
                        step="any"
                        required
                    />

                    <label htmlFor="bin-location">Location</label>
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
                        step="any"
                        required
                    />

                    <label htmlFor="longitude">Longitude</label>
                    <FormInput
                        type="number"
                        min="-180"
                        max="180"
                        placeholder="Enter longitude"
                        onChange={(event) => setLong(event.target.value)}
                        value={long}
                        step="any"
                        required
                    />

                    <GpsButton
                        onClick={getLocation}
                        value="Get current Location"
                    />

                    <label htmlFor="thingspeak">Thingspeak API </label>
                    <FormInput
                        type="url"
                        placeholder="Enter Thingspeak api to connect arduino"
                        onChange={(event) => setThingspeak(event.target.value)}
                        value={thingspeak}
                        required
                    />
                    {loading ? (
                        <InputButton value="submitting ..." />
                    ) : (
                        <InputButton
                            type="submit"
                            value="Update"
                            onClick={createPost}
                        />
                    )}
                </FormBox>
                <DraggableMap
                    setLat={setLat}
                    setLong={setLong}
                    style={{ margin: "0 3rem" }}
                />
            </FormContainer>
        </Fragment>
    );
};

export default UpdateForm;
