import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchButton = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    return (
        <div className="position-absolute top-0 end-5" style={{ position: 'absolute', marginTop: '210px', right: '1000px' }}>
            <InputGroup>
                
                <FormControl
                    type="text"
                    id="searchGeneral"
                    name="searchGeneral"
                    placeholder="Búsqueda"
                    value={searchText}
                    onChange={handleSearchInputChange}
                    autoComplete="off"
                />
                <Button className="btn btn-amarillo" variant="primary" type="submit">
                    <img width={30} height={30} src="icons/lupa.png" alt="Lupa" />
                </Button>
                
            </InputGroup>
        </div>
    );
};

export default SearchButton;
