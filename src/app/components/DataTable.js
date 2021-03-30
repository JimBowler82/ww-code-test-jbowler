import React from "react";
import PropTypes from "prop-types";
import { isEmpty, complement, pipe, filter, map, and } from "ramda";
import { connect } from "react-redux";
import TableEntry from "./TableEntry";
import { Table, TableCaption, Thead, Tbody, Tr, Th } from "@chakra-ui/react";

const mapStateToProps = (state) => {
  return { liabilities: state.liabilities, year: state.year };
};

const DataTable = ({ liabilities, year }) => {
  const byYear = (entry) => entry.year === year;
  const filterByYear = filter(byYear);

  const dataEntry = (entry) => <TableEntry key={entry.id} {...entry} />;
  const mapEntries = map(dataEntry);

  const renderEntries = pipe(
    filterByYear,
    mapEntries
  );

  return (
    <Table variant="striped" colorScheme="teal" backgroundColor="white">
      <TableCaption>
        Enter income for year beginning {year.substring(0, 4)}
      </TableCaption>
      <Thead>
        <Tr>
          <Th>Month</Th>
          <Th isNumeric>Income (£)</Th>
          <Th isNumeric>NI Liability (£)</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {and(complement(isEmpty(liabilities)), renderEntries(liabilities))}
      </Tbody>
    </Table>
  );
};

DataTable.propTypes = {
  liabilities: PropTypes.array.isRequired,
  year: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(DataTable);
