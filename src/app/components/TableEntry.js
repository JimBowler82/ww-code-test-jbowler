import React from "react";
import PropTypes from "prop-types";
import { CloseButton, Td, Tr } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { removeEntry } from "../store/actions";

const TableEntry = ({ id, month, income, liability }) => {
  const dispatch = useDispatch();

  return (
    <Tr>
      <Td>{month}</Td>
      <Td isNumeric>£{income}</Td>
      <Td isNumeric>£{liability}</Td>
      <Td>
        <CloseButton onClick={() => dispatch(removeEntry(id))} />
      </Td>
    </Tr>
  );
};

TableEntry.propTypes = {
  id: PropTypes.number.isRequired,
  month: PropTypes.string.isRequired,
  income: PropTypes.string.isRequired,
  liability: PropTypes.string.isRequired,
};

export default TableEntry;
