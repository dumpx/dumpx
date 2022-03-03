import React from 'react'
import { Input, SearchPanelContainer } from './styles'

const SearchPanel = () => {
    return (
        <SearchPanelContainer>
            <form>
                <input placeholder='search'></input>
                <button type="submit">Search</button>
            </form>
        </SearchPanelContainer>
    )
}

export default SearchPanel