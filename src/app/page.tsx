"use client";
import AnimatedBlock from "@/components/animation/animated-block";
import { TypewriterEffectSmooth } from "@/components/animation/typerwriter-effect";
import Section from "@/components/section";
import TechStack from "@/components/tech-stack";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { formatDate, getAllPosts } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import ContactDialog from "@/components/contact-email";
import { Button } from "@/components/ui/button";
import { DevToPost } from "@/lib/types";
import WorkExperienceTimeline from "@/components/work-experience";
export default function Home() {
  const [isContactDialogOpen, setIsContactDialogOpen] =
    useState<boolean>(false);
  const [featuredPost, setFeaturedPost] = useState<DevToPost | undefined>(
    undefined
  );

  useEffect(() => {
    async function fetchPost() {
      try {
        const posts = await getAllPosts();

        setFeaturedPost(posts[0]);
      } catch (err) {
        console.error(err);
      }
    }

    fetchPost();
  }, []);

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
                "https://drive.google.com/file/d/1ApyQVppugAFe4ueSJqIowopbt6PfysTD/view?usp=drive_link"
              }
              className="font-bold text-sectionTitle"
            >
              resume
            </Link>
            , and feel free to{" "}
            <Button
              onClick={() => setIsContactDialogOpen(true)}
              className="p-0 bg-transparent hover:bg-transparent font-bold text-sectionTitle"
            >
              get in touch.
            </Button>
          </p>
          <ContactDialog
            isOpen={isContactDialogOpen}
            setIsOpen={setIsContactDialogOpen}
          />
          <div className="mb-4 flex items-center">
            <span className="mr-2">You can also find me on: </span>
            <div className="flex gap-4">
              <Link target="_blank" href="https://github.com/nishnt2">
                <SiGithub size={16} />
              </Link>

              <Link
                target="_blank"
                href="https://www.linkedin.com/in/nishant-patil-160000185/"
              >
                <SiLinkedin size={16} />
              </Link>
              <Link target="_blank" href="https://x.com/ImNishant3">
                <SiX size={16} />
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

      <AnimatedBlock delay="0.1">
        <Section title="mystack">
          {" "}
          <TechStack />
        </Section>
      </AnimatedBlock>
      <AnimatedBlock>
        <Section title="experience" classname="w-full">
          <WorkExperienceTimeline />
        </Section>
      </AnimatedBlock>
      <AnimatedBlock delay="0.1">
        <Section
          title="featured"
          classname="w-full flex center  justify-center flex-col"
        >
          {featuredPost ? (
            <Card
              key={featuredPost.id}
              className="w-full hover:shadow-lg transition-shadow duration-200 py-4 cursor-default"
            >
              <CardHeader className="mb-1">
                <Link
                  href={`/articles/${featuredPost.slug}`}
                  className="text-sm md:text-base font-medium text-textClr hover:text-sectionTitle  transition-colors duration-200  leading-tight"
                >
                  {featuredPost.title}
                </Link>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-3 text-s">
                  <span>{formatDate(featuredPost.published_at)}</span>
                  <i className="font-normal  text-sm">
                    ({featuredPost.reading_time_minutes} min read)
                  </i>
                </div>
              </CardContent>
            </Card>
          ) : null}

          <Link
            href="/articles"
            className="mt-4 text-center hover:underline font-bold text-sectionTitle"
          >
            View All
          </Link>
        </Section>
      </AnimatedBlock>
      <AnimatedBlock delay="0.1">
        <Section title="alsointo" classname="w-full">
          Chess | Anime/Manga | Cricket | Badminton | Music | Rubik Cubes
        </Section>
      </AnimatedBlock>
    </main>
  );
}
