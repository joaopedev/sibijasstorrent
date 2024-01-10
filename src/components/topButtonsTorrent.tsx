import { Flex, Button, Select, Spacer } from "@chakra-ui/react";

export const TopButtonsTorrent: React.FC = () => {
  return (
    <Flex>
      <Select maxW="4%">
        <option></option>
      </Select>
      <Select>
        <option></option>
      </Select>
      <Select>
        <option></option>
      </Select>
      <Spacer/>
      <Button>Create torrent +</Button>
      <Button>Add torrent +</Button>
    </Flex>
  );
};

export default TopButtonsTorrent;
