import AnimatedBlock from "@/components/animation/animated-block";
import Container from "@/components/container";
import Section from "@/components/section";

export default function Article() {
  return (
    <Container>
      <AnimatedBlock>
        <Section title="article">This is an article </Section>
      </AnimatedBlock>
    </Container>
  );
}
