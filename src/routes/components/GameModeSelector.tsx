import { useState } from 'react';
import { Radio, Group, Stack, Text } from '@mantine/core';
import classes from './GameModeSelector.module.css';

const data = [
  {
    name: 'Random Words',
    description: 'Random words from the list of words',
  },
  { name: 'Random-Like with Fix Result', description: 'Using fix result of random with giving words' },
];

export function GameModeSelector() {
  const [value, setValue] = useState<string | null>(null);

  const cards = data.map((item) => (
    <Radio.Card className={classes.root} radius="md" value={item.name} key={item.name}>
      <Group wrap="nowrap" align="flex-start">
        <Radio.Indicator />
        <div>
          <Text className={classes.label}>{item.name}</Text>
          <Text className={classes.description}>{item.description}</Text>
        </div>
      </Group>
    </Radio.Card>
  ));

  return (
    <>
      <Radio.Group
        value={value}
        onChange={setValue}
        label="Pick game mode for your game"
        description="Choose a game mode that you want to play"
      >
        <Stack pt="md" gap="xs">
          {cards}
        </Stack>
      </Radio.Group>

      <Text fz="xs" mt="md">
        CurrentValue: {value || '–'}
      </Text>
    </>
  );
}