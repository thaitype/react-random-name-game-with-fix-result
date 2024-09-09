import { Flex, Grid, Paper, Text, Textarea, Title } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { GameModeSelector } from './GameModeSelector';
export function GameConfig() {
  const [value, setValue] = useState('');
  return (
    <Paper shadow="xs" withBorder p="xl">
      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="center"
        direction="column"
        wrap="wrap"
      >
        <Title order={1} mb={30}>Random Game Name</Title>
        <Grid>
          <Grid.Col span={6} pr={80} >
            {/* <Text>
              Use it to create cards, dropdowns, modals and other components that require background
              with shadow
            </Text> */}
            <GameModeSelector />
          </Grid.Col>
          <Grid.Col span={6}>

            <Textarea
              size="xl"
              label="All Possible Words"
              placeholder="Enter the name of the game"
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
            /></Grid.Col>
        </Grid>


        <Link to="/play" search={{
          foo: 'bar',
        }} className="blue-button">
          Play
        </Link>
      </Flex>
    </Paper>

  );
}
