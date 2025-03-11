'use client';

// App.tsx
import { useAppKit } from '@reown/appkit/react';
import { Button, Container, Stack, Title } from '@mantine/core';

export default function App() {
  return <AppHome />;
}

export function AppHome() {
  const { open } = useAppKit();

  return (
    <Container size="lg" style={{ minHeight: '100vh', padding: '20px' }}>
      <Stack align="center" gap="lg">
        <Title order={1}>Hello</Title>
        <Button onClick={() => open()} color="blue">
          Wallet
        </Button>
      </Stack>
    </Container>
  );
}
