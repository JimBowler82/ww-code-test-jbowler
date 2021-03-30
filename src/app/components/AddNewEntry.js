import React, { useRef } from "react";
import { css } from "@emotion/core";
import YearSelect from "./YearSelect";
import { addEntry } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Heading,
  Input,
  Flex,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

const AddNewEntry = () => {
  const dispatch = useDispatch();
  const year = useSelector((state) => state.year);

  const monthRef = useRef(null);
  const incomeRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:8080/v1/national-insurance",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-run-date": year,
        },
        body: JSON.stringify({ income: incomeRef.current.value }),
      }
    );
    const data = await response.json();

    const newEntry = {
      year,
      month: monthRef.current.value,
      income: incomeRef.current.value,
      liability: data.ni,
    };

    dispatch(addEntry(newEntry));
    incomeRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <YearSelect />
      <Heading as="h3" size="md" mb="4">
        Add New
      </Heading>

      <Flex align="center" justify="space-between">
        <FormControl width="30%">
          <FormLabel>Month</FormLabel>
          <Select name="month" ref={monthRef} backgroundColor="white">
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </Select>
        </FormControl>
        <FormControl width="30%">
          <FormLabel>Amount (£)</FormLabel>
          <Input
            type="number"
            name="income"
            ref={incomeRef}
            backgroundColor="white"
          />
        </FormControl>
        <FormControl
          css={css`
            align-self: flex-end;
            text-align: center;
            width: 30%;
          `}
        >
          <Button type="submit" colorScheme="teal" size="md" width="100%">
            ADD
          </Button>
        </FormControl>
      </Flex>
    </form>
  );
};

export default AddNewEntry;
