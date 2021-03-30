import React from "react";
import { css } from "@emotion/core";
import { changeYear } from "../store/actions";
import { useDispatch } from "react-redux";
import { Flex, FormLabel, Select } from "@chakra-ui/react";

const YearSelect = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value === "2018") {
      return dispatch(changeYear("2018"));
    }

    return dispatch(changeYear("2019"));
  };

  return (
    <Flex align="center" style={{ marginBottom: "20px" }}>
      <FormLabel>Year</FormLabel>
      <Select
        w="200px"
        css={css`
          marginleft: 0px;
          background-color: white;
        `}
        onChange={handleChange}
      >
        <option value="2018">2018/19</option>
        <option value="2019">2019/20</option>
      </Select>
    </Flex>
  );
};

export default YearSelect;
