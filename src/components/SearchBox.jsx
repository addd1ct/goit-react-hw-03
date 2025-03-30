import { useDispatch } from 'react-redux';
import { changeFilter } from '../redux/filtersSlice';

const SearchBox = ({ filter }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <label>
        Search:
        <input type="text" value={filter} onChange={handleChange} />
      </label>
    </div>
  );
};

export default SearchBox;
