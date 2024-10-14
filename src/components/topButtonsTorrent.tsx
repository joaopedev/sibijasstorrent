import { Flex, Button, Select, Spacer } from "@chakra-ui/react";

export const TopButtonsTorrent: React.FC = () => {
  return (
    <Flex>
      <Select m={3} maxW="4%">
        <option></option>
      </Select>
      <Select placeholder="Show All" m={3} maxW="20%">
        <option></option>
      </Select>
      <Select placeholder="Sort: Most Recent" m={3} maxW="20%">
        <option></option>
      </Select>
      <Spacer/>
      <Button m={3}>Create torrent +</Button>
      <Button m={3}>Add torrent +</Button>
    </Flex>
  );
};

export default TopButtonsTorrent;
