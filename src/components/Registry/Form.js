import React, { Fragment, useState } from 'react'
import { FormContainer } from './styles'
import { supabase } from '../../client'

const Form = () => {

    const [formData, setFormData] = useState('');

    const createPost = async (e) => {

        e.preventDefault();

        const { data, error } = await supabase
            .from('bin-data')
            .insert([
                { bincode: Math.random(1000, 9999), binLocation: formData, description: 'blah', lattitude: Math.random(1, 180), longitude: Math.random(1, 180) },
            ])

        if (error) {
            alert(error.error_description || error.message)
        }

        console.log(`inserted`);
    }

    return (
        <Fragment>
            <FormContainer>
                <form onSubmit={e => createPost(e)}>
                    <label htmlFor="bin-code" >
                        <h3>Enter Bin Code</h3>
                        <input
                            type="text"
                            placeholder='bin code'
                            onChange={(event) => setFormData(event.target.value)}
                            value={formData}
                        />
                    </label>

                    <label htmlFor="bin-location" >
                        <h3>Enter Bin Location</h3>
                        <input type="text" placeholder='bin location' />
                    </label>

                    <label htmlFor='desc'>
                        <h3>Description</h3>
                        <input type="text" placeholder='desc' />
                    </label>

                    <label htmlFor='latitude'>
                        <h3>Latitude</h3>
                        <input type='number' placeholder='latitude' />
                    </label>

                    <label htmlFor="longitude">
                        <h3>Longitude</h3>
                        <input type="number" placeholder='longitude' />
                    </label>

                    <button type="submit">Submit</button>
                </form>
            </FormContainer>
        </Fragment>
    )
}

export default Form