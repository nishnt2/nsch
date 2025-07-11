import AnimatedBlock from "@/components/animation/animated-block";
import { TypewriterEffectSmooth } from "@/components/animation/typerwriter-effect";
import Section from "@/components/section";
import TechStack from "@/components/tech-stack";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { formatDate, getAllPosts } from "@/lib/utils";
import Link from "next/link";
export default async function Home() {
  const posts = await getAllPosts();

  const article = posts[0];

  return (
    <main className="font-code flex flex-col gap-[24px] row-start-2 items-center sm:items-start width-full">
      <AnimatedBlock delay="0.1">
        <Section title="whoami">
          <div className="mb-4">
            <TypewriterEffectSmooth
              words={[
                { text: "Hi,", className: "text-xl" },
                { text: "I", className: "text-xl" },
                { text: "am", className: "text-xl" },
                { text: "NISHANT", className: "text-xl" },
              ]}
            />
          </div>

          <p className=" mb-4">
            A Full Stack Engineer from India who builds fast, scalable, and
            beautifully animated web experiences. I blend performance with
            creativity to craft interfaces that feel as good as they look.
          </p>
          <p className="mb-4">
            Take a look at my{" "}
            <Link
              target="_blank"
              href={
                "https://drive.google.com/file/d/1_lb0OMxyq3herSXslBV6O11ABo0Y6q59/view?usp=sharing"
              }
              className="font-bold text-sectionTitle"
            >
              resume
            </Link>
            , and feel free to{" "}
            <Link
              target="_blank"
              href={"mailto:nishantpatil2911@gmail.com"}
              className="font-bold text-sectionTitle"
            >
              get in touch via email.
            </Link>
          </p>

          <div className="mb-4 flex items-center">
            <span className="mr-2">You can also find me on: </span>
            <div className="flex gap-4">
              <Link target="_blank" href="https://github.com/nishnt2">
                <SiGithub size={18} />
              </Link>

              <Link
                target="_blank"
                href="https://www.linkedin.com/in/nishant-patil-160000185/"
              >
                <SiLinkedin size={18} />
              </Link>
              <Link target="_blank" href="https://x.com/ImNishant3">
                <SiX size={18} />
              </Link>
            </div>
          </div>

          <p>
            Or we can chat over a chess board at{" "}
            <Link
              target="_blank"
              href={"https://www.chess.com/member/nishantpatill"}
              className="font-bold text-sectionTitle"
            >
              Chess.com
            </Link>
            !
          </p>
        </Section>
      </AnimatedBlock>
      <AnimatedBlock delay="0.2">
        <Section title="mywork" classname="w-full">
          <></>
        </Section>
      </AnimatedBlock>
      <AnimatedBlock delay="0.3">
        <Section title="mystack">
          {" "}
          <TechStack />
        </Section>
      </AnimatedBlock>

      <AnimatedBlock delay="0.4">
        <Section
          title="featuredPost"
          classname="w-full flex center  justify-center flex-col"
        >
          <Card
            key={article.id}
            className="w-full hover:shadow-lg transition-shadow duration-200 py-4 cursor-default"
          >
            <CardHeader className="mb-1">
              <Link
                href={`/articles/${article.slug}`}
                className="text-sm md:text-base font-medium text-textClr hover:text-sectionTitle  transition-colors duration-200  leading-tight"
              >
                {article.title}
              </Link>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center gap-3 text-s">
                <span>{formatDate(article.published_at)}</span>
                <i className="font-normal  text-sm">
                  ({article.reading_time_minutes} min read)
                </i>
              </div>
            </CardContent>
          </Card>

          <Link
            href="/articles"
            className="mt-4 text-center hover:underline font-bold text-sectionTitle"
          >
            View All
          </Link>
        </Section>
      </AnimatedBlock>
      <AnimatedBlock delay="0.4">
        <Section title="alsointo" classname="w-full">
          Chess | Anime/Manga | Cricket | Badminton | Music | Rubik Cubes
        </Section>
      </AnimatedBlock>
    </main>
  );
}
