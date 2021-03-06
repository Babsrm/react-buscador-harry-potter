const FilterHouse = (props) => {
	const handleChange = (ev) => {
		ev.preventDefault();
		props.handleFilter({
			key: 'house',
			value: ev.target.value,
		});
	};
	return (
		<>
			<label className="" htmlFor="house">
				Casas:
			</label>
			<select
				className=""
				name="house"
				id="house"
				onChange={handleChange}
				value={props.filterHouse}
			>
				<option value="Gryffindor">Gryffindor</option>
				<option value="Slytherin">Slytherin</option>
				<option value="Ravenclaw">Ravenclaw</option>
				<option value="Hufflepuff">Hufflepuff</option>
			</select>
		</>
	);
};
export default FilterHouse;
