import AnimatedBlock from "@/components/animation/animated-block";
import Container from "@/components/container";
import Section from "@/components/section";

export default function Article() {
  return (
    <Container>
      <AnimatedBlock>
        <Section title="projects">
          This is projects section. Here you can find a collection of my
          projects that I have worked on. Each project showcases my skills and
          expertise in web development, programming, and technology. Feel free
          to explore the projects and learn more about the technologies and
          techniques I have used. I aim to share my work and inspire others in
          their own projects.
        </Section>
      </AnimatedBlock>
    </Container>
  );
}
