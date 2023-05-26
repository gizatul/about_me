import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

const SearchPanel = ({ searchText, onSearch, onClear }) => {
	return (
		<Form className="mb-2">
			<Form.Group controlId="searchForm">
				<InputGroup>
					<Form.Control type="text" placeholder="Поиск по заголовку" value={searchText} onChange={onSearch} />
					{searchText && (
						<Button variant="secondary" size="sm" onClick={onClear} className="search-clear-button">
							&times;
						</Button>
					)}
				</InputGroup>
			</Form.Group>
		</Form>
	);
};

export default SearchPanel;
