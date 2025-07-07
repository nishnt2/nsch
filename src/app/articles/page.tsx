import AnimatedBlock from '@/components/animation/animated-block';
import Container from '@/components/container';
import Section from '@/components/section';

export default function Article() {
  return (
    <Container>
      <AnimatedBlock>
        <Section title="articles">
          This is articles section. Here you can find a collection of my
          articles that I have written. Each article covers various topics
          related to web development, programming, and technology. Feel free to
          explore the articles and learn more about the subjects I am passionate
          about. I aim to share knowledge, insights, and experiences that can
          help others in their learning journey.
        </Section>
      </AnimatedBlock>
    </Container>
  );
}
