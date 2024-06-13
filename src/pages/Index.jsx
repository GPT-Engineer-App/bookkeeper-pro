import { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, Select, Box, Heading, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const Index = () => {
  const [accounts, setAccounts] = useState([]);
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleAddAccount = () => {
    if (subject && amount && category) {
      const newAccount = { subject, amount, category };
      setAccounts([...accounts, newAccount]);
      setSubject("");
      setAmount("");
      setCategory("");
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="xl">Library of Accounts</Heading>
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg">
          <VStack spacing={4}>
            <HStack width="100%">
              <Input placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
              <Input placeholder="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
              <Select placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Revenue">Revenue</option>
                <option value="Expenses">Expenses</option>
              </Select>
              <Button colorScheme="blue" onClick={handleAddAccount}>Add</Button>
            </HStack>
          </VStack>
        </Box>
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>Accounts</Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Subject</Th>
                <Th>Amount</Th>
                <Th>Category</Th>
              </Tr>
            </Thead>
            <Tbody>
              {accounts.map((account, index) => (
                <Tr key={index}>
                  <Td>{account.subject}</Td>
                  <Td>{account.amount}</Td>
                  <Td>{account.category}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;