import { useCrimes } from "../state/crimesProvider";
import { useFetchData } from "../hooks/useFetch";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  useControllableState,
} from "@chakra-ui/react";
import React from "react";
import { isArrayMisdemeanour } from "../utils/typeCheck";
import { Misdemeanour } from "../types/types";

type Props = {};

type Data =
  | {
      misdemeanours: Misdemeanour[];
    }
  | undefined;

type TableRowProps = {
  citizenId: number;
  offence: string;
  offenceDate: string;
};

const TableRow: React.FC<TableRowProps> = ({
  citizenId,
  offence,
  offenceDate,
}) => {
  return (
    <Tr>
      <Th>{citizenId}</Th>
      <Th>{offence}</Th>
      <Th>{offenceDate}</Th>
      <Th>
        <Image
          boxSize='150px'
          src='https://picsum.photos/200/300'
          alt='punishment'
        />
      </Th>
    </Tr>
  );
};

const Misdemeanours = (props: Props) => {
  const { crimes, setCrimes } = useCrimes();
  const [numPages, setNumPages] = useControllableState({ defaultValue: 5 });
  const {
    data,
    error,
    isFetching,
    status,
  }: {
    data: Data;
    error: string;
    isFetching: boolean;
    status: number | undefined;
  } = useFetchData(`http://localhost:8080/api/misdemeanours/${numPages}}`);

  const handlePageChange = () => {
    setNumPages(numPages * 2);
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (status === 200) {
    if (data && isArrayMisdemeanour(data.misdemeanours)) {
      setCrimes(data.misdemeanours);
    }
  }
  return (
    <Box className='misdemeanours'>
      <Heading mt='2rem' as='h3' className='misdemeanours__title'>
        {" "}
        Welcome to Misdemeanour Central
      </Heading>

      <HStack mt='2rem' className='misdemeanours__filter'>
        <Select placeholder='Filter'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
      </HStack>

      <TableContainer className='misdemeanours__table'>
        <Table variant='striped' colorScheme='purple'>
          <TableCaption m='2rem' placement='top'>
            {" "}
            Here are the list of misdemeanours committed by FakeLandians
          </TableCaption>
          <TableCaption m='2rem' placement='bottom'>
            <Flex justifyContent='center'>
              <Button onClick={handlePageChange}>Load More</Button>
            </Flex>
          </TableCaption>

          <Thead>
            <Tr>
              <Th>Citizen ID</Th>
              <Th>Offence</Th>
              <Th>Offence Date</Th>
              <Th>Punishment Picture</Th>
            </Tr>
          </Thead>
          <Tbody>
            {crimes.map((crime) => {
              return (
                <TableRow
                  key={crime.citizenId}
                  citizenId={+crime.citizenId}
                  offence={crime.misdemeanour}
                  offenceDate={crime.date}
                />
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Misdemeanours;
