import { useSelector, useDispatch } from "react-redux";
import { selectFilterStatus, status } from "./filtersSlice";
import { changeFilterStatus } from "./filtersSlice";

function Filters() {
  const filterStatus = useSelector(selectFilterStatus);
  const dispatch = useDispatch();

  function handleFilter(val) {
    dispatch(changeFilterStatus(val));
  }

  const statusFilter = Object.entries(status).map(([key, val]) => {
    const filterItemClassName = val === filterStatus ? "selected" : "";
    return (
      <li key={key} onClick={() => handleFilter(val)}>
        <button className={filterItemClassName}>{key}</button>
      </li>
    );
  });
  return <ul className="filters">{statusFilter}</ul>;
}

export default Filters;
