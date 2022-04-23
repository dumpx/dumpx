import React, { Fragment, useState } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import { FormContainer,  FormInput, FormBox, InputButton} from "./styles";
// import FormControl from "@mui/material/FormControl";
// import Input from "@mui/material/Input";
// import InputLabel from "@mui/material/InputLabel";
// import FormHelperText from "@mui/material/FormHelperText";

import { supabase } from "../../client";

const Form = () => {
    const [formData, setFormData] = useState("");

    const createPost = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase.from("bin-data").insert([
            {
                bincode: Math.random(1000, 9999),
                binLocation: formData,
                description: "blah",
                lattitude: 100,
                longitude: 100,
            },
        ]);

        if (error) {
            alert(error.error_description || error.message);
        } else {
            console.log(data);
        }

        console.log(`inserted`);
    };

    return (
        <Fragment>
            <FormContainer>
                <FormBox onSubmit={createPost.bind()}>
                    <label htmlFor="bin-code">
                    Bin Code
                    </label>
                        <FormInput
                            type="text"
                            placeholder="Enter bin code"
                            onChange={(event) =>
                                setFormData(event.target.value)
                            }
                            value={formData}
                        />

                    <label htmlFor="bin-location">
                         Bin Location
                    </label>
                        <FormInput type="text" placeholder="Enter bin location" />

                    <label htmlFor="desc">
                        Description
                    </label>
                        <FormInput type="text" placeholder="Description ..." />

                    <label htmlFor="latitude">
                        Latitude
                    </label>
                        <FormInput type="number" min="-90" max="90" placeholder="Enter latitude" />

                    <label htmlFor="longitude">
                        Longitude
                    </label>
                        <FormInput type="number" min="-180" max="180" placeholder="Enter longitude" />

                    <InputButton type="submit" value="Submit" />
                </FormBox>
            </FormContainer>
        </Fragment>
    );
};

export default Form;
