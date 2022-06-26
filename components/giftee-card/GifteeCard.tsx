import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import * as React from "react";
import { HiCash, HiLocationMarker, HiShieldCheck } from "react-icons/hi";
import { Card } from "./Card";

export const GifteeCard = ({ name }) => {
  return (
    <Box py="5">
      <Card>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "3", md: "10" }}
          align="flex-start"
        >
          <Stack spacing="4">
            <Avatar
              size="2xl"
              src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjY5fHxsYWR5JTIwc21pbGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              name="Melinda Paul"
            />
          </Stack>
          <Box>
            <Stack
              spacing={{ base: "1", md: "2" }}
              direction={{ base: "column", md: "row" }}
            >
              <Text as="h2" fontWeight="bold" fontSize="xl">
                {name}
              </Text>
            </Stack>
            <Text mt="2">Brother</Text>
            <Wrap shouldWrapChildren my="4" spacing="4">
              <HStack spacing="1">
                <Icon as={HiLocationMarker} color="gray.400" />
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  Raleigh, NC
                </Text>
              </HStack>
            </Wrap>
            <Box fontSize="sm" noOfLines={2}>
              Hi, I am a professional Graphic Designer and Web Developer. I am a
              member of Evolving team [login to view URL] and I have experience
              of 5+ years even before joining this.
            </Box>
            <Wrap
              shouldWrapChildren
              mt="5"
              color={useColorModeValue("gray.600", "gray.300")}
            >
              {["Adobe Photoshop", "UX/UI", "Landing Page", "Web Design"].map(
                (tag) => (
                  <Tag key={tag} color="inherit" px="3">
                    {tag}
                  </Tag>
                )
              )}
            </Wrap>
          </Box>
        </Stack>
        <Button mt="8" width="full" colorScheme="blue" display={{ md: "none" }}>
          Contact me
        </Button>
      </Card>
    </Box>
  );
};
