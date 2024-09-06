const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex text-gray-300'>
			<div className=''>
				<label className={`label gap-2 cursor-pointer  `}>
					<span className=''>Male</span>
					<input type='checkbox'checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
                         className='checkbox border-white' />
				</label>
			</div>
			<div className=''>
				<label className={`label gap-2 cursor-pointer  `}>
					<span className=''>Female</span>
					<input type='checkbox' checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
                         className='checkbox border-white' />
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;