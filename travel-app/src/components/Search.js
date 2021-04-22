import React from "react";
import { globalStyles } from "../constants/globalStyles";

const Search = (props) => {
  return (
    <div className="search-box">
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
      {props.filteredList && (
        <ul
          className={
            "search-list" + (props.filteredList.length > 0 ? " show" : null)
          }
        >
          {props.filteredList.map((data) => {
            return (
              <li
                value={data.id}
                key={data.id}
                onClick={(e) => props.onClick(e, data.id)}
              >
                {data.location}
              </li>
            );
          })}
        </ul>
      )}

      <style>
        {`
          .search-box{
            width: 250px;
          }
          .search-box input[type="text"] {
            width: 100%;
            padding: 5px 15px;
            font-size: 1.2rem;
            border: 0.5px solid ${globalStyles.THEME_PURPLE};
            position: relative
          }
          .search-list {
            position: absolute;
            list-style: none;
            padding: 5px 0;
            background: white;
            width: 250px;
          }
          .search-list li{
            padding: 5px 15px;
            border-bottom: 0.3px solid ${globalStyles.THEME_PURPLE};
            cursor: pointer;
          }
          .search-list li:last-child {
            border-bottom: none;
          }
          `}
      </style>
    </div>
  );
};

export default Search;
