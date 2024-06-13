import { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, Select, Box, Heading, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const Index = () => {
  const [accounts, setAccounts] = useState([]);
  const [costCenters, setCostCenters] = useState([]);
  const [contraAccounts, setContraAccounts] = useState([]);
  const [tags, setTags] = useState([]);
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [costCenter, setCostCenter] = useState("");
  const [contraAccount, setContraAccount] = useState("");
  const [tag, setTag] = useState("");

  const handleAddAccount = () => {
    if (subject && amount && category) {
      const newAccount = { subject, amount, category, costCenter, contraAccount, tag };
      setAccounts([...accounts, newAccount]);
      setSubject("");
      setAmount("");
      setCategory("");
      setCostCenter("");
      setContraAccount("");
      setTag("");
    }
  };

  const handleAddCostCenter = () => {
    if (costCenter) {
      setCostCenters([...costCenters, costCenter]);
      setCostCenter("");
    }
  };

  const handleAddContraAccount = () => {
    if (contraAccount) {
      setContraAccounts([...contraAccounts, contraAccount]);
      setContraAccount("");
    }
  };

  const handleAddTag = () => {
    if (tag) {
      setTags([...tags, tag]);
      setTag("");
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
              <Select placeholder="Cost Center" value={costCenter} onChange={(e) => setCostCenter(e.target.value)}>
                {costCenters.map((center, index) => (
                  <option key={index} value={center}>{center}</option>
                ))}
              </Select>
              <Select placeholder="Contra Account" value={contraAccount} onChange={(e) => setContraAccount(e.target.value)}>
                {contraAccounts.map((account, index) => (
                  <option key={index} value={account}>{account}</option>
                ))}
              </Select>
              <Select placeholder="Tag" value={tag} onChange={(e) => setTag(e.target.value)}>
                {tags.map((tagItem, index) => (
                  <option key={index} value={tagItem}>{tagItem}</option>
                ))}
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
                <Th>Cost Center</Th>
                <Th>Contra Account</Th>
                <Th>Tag</Th>
              </Tr>
            </Thead>
            <Tbody>
              {accounts.map((account, index) => (
                <Tr key={index}>
                  <Td>{account.subject}</Td>
                  <Td>{account.amount}</Td>
                  <Td>{account.category}</Td>
                  <Td>{account.costCenter}</Td>
                  <Td>{account.contraAccount}</Td>
                  <Td>{account.tag}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>Manage Cost Centers</Heading>
          <HStack width="100%">
            <Input placeholder="Cost Center" value={costCenter} onChange={(e) => setCostCenter(e.target.value)} />
            <Button colorScheme="blue" onClick={handleAddCostCenter}>Add Cost Center</Button>
          </HStack>
          <Table variant="simple" mt={4}>
            <Thead>
              <Tr>
                <Th>Cost Center</Th>
              </Tr>
            </Thead>
            <Tbody>
              {costCenters.map((center, index) => (
                <Tr key={index}>
                  <Td>{center}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>Manage Contra Accounts</Heading>
          <HStack width="100%">
            <Input placeholder="Contra Account" value={contraAccount} onChange={(e) => setContraAccount(e.target.value)} />
            <Button colorScheme="blue" onClick={handleAddContraAccount}>Add Contra Account</Button>
          </HStack>
          <Table variant="simple" mt={4}>
            <Thead>
              <Tr>
                <Th>Contra Account</Th>
              </Tr>
            </Thead>
            <Tbody>
              {contraAccounts.map((account, index) => (
                <Tr key={index}>
                  <Td>{account}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>Manage Tags</Heading>
          <HStack width="100%">
            <Input placeholder="Tag" value={tag} onChange={(e) => setTag(e.target.value)} />
            <Button colorScheme="blue" onClick={handleAddTag}>Add Tag</Button>
          </HStack>
          <Table variant="simple" mt={4}>
            <Thead>
              <Tr>
                <Th>Tag</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tags.map((tagItem, index) => (
                <Tr key={index}>
                  <Td>{tagItem}</Td>
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