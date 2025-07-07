import AnimatedBlock from "@/components/animation/animated-block";
import Container from "@/components/container";
import Section from "@/components/section";

export default function Article() {
  return (
    <Container>
      <AnimatedBlock>
        <Section title="aboutme">
          This is about page for my personal website. It contains information
          about me, my interests, and my work.
        </Section>
      </AnimatedBlock>
    </Container>
  );
}
