import React, { useState } from "react";
import { Box, Button, Heading, Text, Input, VStack, HStack, Avatar, Spacer } from "@chakra-ui/react";
import { FaRobot, FaPlay } from "react-icons/fa";

const Index = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleStartClick = () => {
    setIsChatbotOpen(true);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const userMessage = {
        type: "user",
        text: inputMessage,
      };
      const botMessage = {
        type: "bot",
        text: "I'm learning the task based on your input. Please provide more details or an example.",
      };
      setMessages([...messages, userMessage, botMessage]);
      setInputMessage("");
    }
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Robotic Process Automation (RPA)
      </Heading>
      <Text fontSize="xl" mb={8}>
        Automate tasks with natural language commands using our intelligent chatbot.
      </Text>
      <Button leftIcon={<FaPlay />} colorScheme="blue" size="lg" onClick={handleStartClick}>
        Start Chatbot
      </Button>

      {isChatbotOpen && (
        <Box mt={8} borderWidth={1} borderRadius="lg" p={4}>
          <VStack spacing={4} align="stretch">
            {messages.map((message, index) => (
              <HStack key={index} align="start">
                <Avatar size="sm" icon={message.type === "user" ? undefined : <FaRobot />} />
                <Text>{message.text}</Text>
              </HStack>
            ))}
          </VStack>
          <HStack mt={4}>
            <Input value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} placeholder="Type your message..." />
            <Spacer />
            <Button colorScheme="blue" onClick={handleSendMessage}>
              Send
            </Button>
          </HStack>
        </Box>
      )}
    </Box>
  );
};

export default Index;
