import React, { useContext } from "react";
import SelectedCategoryContext from "../../state/SelectedCategoryState";
import { v4 as uuidv4 } from "uuid";

import { Table } from "./table.styled";
export default function CategoryTable(props) {
  const data = props.data;
  const { changeCategory } = useContext(SelectedCategoryContext);

  return (
    <Table>
      <thead>
        <tr>
          <th>Categories</th>
        </tr>
      </thead>

      <tbody>
        {data.map((category) => (
          <tr key={uuidv4()} onClick={() => changeCategory(category)}>
            <td>{category}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
