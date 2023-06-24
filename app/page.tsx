import { Button, Code, Title, Text } from "@/externals/exports";

export default function Home() {
  const codeForColor = `<Text c="complementary">`;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Title>This is an H1 Title without the color property</Title>
      <Title order={1} color="brand">
        This is an H1 Title in the brand color; which is or primary color.
      </Title>
      <Title order={2} color="secondary">
        This is an H2 Title in the default secondary color.
      </Title>
      <Title order={3} c="secondary.3">
        This is an H3 Title in the 3rd shade of the secondary color
      </Title>
      <Text c="complementary">
        You can use <Code color="yellow">{`c="complementary"`}</Code> instead of{" "}
        <Code color="yellow">{`color="complementary"`} as a shortcut</Code>
      </Text>
      <Title order={4} color="secondary.9">
        This is an H4 Title in the 10th shade of the secondary color
      </Title>
      <Title order={5}>
        This is an H5 Title in the{" "}
        <Text color="accent" span={true}>
          accent
        </Text>{" "}
        color
      </Title>

      <Button>Primary color is default</Button>
      <Button color="accent">Using Accent</Button>
    </main>
  );
}
