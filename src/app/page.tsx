import AnimatedBlock from "@/components/animation/animated-block";
import { TypewriterEffectSmooth } from "@/components/animation/typerwriter-effect";
import Section from "@/components/section";
import TechStack from "@/components/tech-stack";
import Link from "next/link";

export default function Home() {
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
              href={"#"}
              className="font-bold text-sectionTitle"
            >
              resume
            </Link>
            , and feel free to{" "}
            <Link
              target="_blank"
              href={"#"}
              className="font-bold text-sectionTitle"
            >
              get in touch via email.
            </Link>
          </p>

          <p className="mb-4">
            You can also find me on{" "}
            <Link
              target="_blank"
              href="https://github.com/nishnt2"
              className="font-bold text-sectionTitle"
            >
              GitHub
            </Link>
            ,{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/nishant-patil-160000185/"
              className="font-bold text-sectionTitle"
            >
              LinkedIn
            </Link>
            , and{" "}
            <Link
              target="_blank"
              href="https://x.com/ImNishant3"
              className="font-bold text-sectionTitle"
            >
              X
            </Link>
            — or we can chat over a chess board at{" "}
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
        <Section title="mystack">
          {" "}
          <TechStack />
        </Section>
      </AnimatedBlock>

      <AnimatedBlock delay="0.3">
        <Section title="mywork" classname="w-full">
          <></>
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
