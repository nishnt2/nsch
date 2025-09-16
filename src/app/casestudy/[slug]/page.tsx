"use client";
import { DevToPost } from "@/lib/types";
import { getAllCaseStudies } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import AnimatedBlock from "@/components/animation/animated-block";
import Container from "@/components/container";
import Section from "@/components/section";
import React, { useEffect, useState } from "react";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import AnimatedText from "@/components/animation/animated-text";
import { ArrowLeft } from "lucide-react";

export default function Article() {
  const [casestudy, setCaseStudy] = useState<DevToPost>();
  const { slug } = useParams();

  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const posts = await getAllCaseStudies();
        const post = posts.find((item: DevToPost) => item.slug === slug);
        setCaseStudy(post);
      } catch (err) {
        console.error(err);
      }
    };

    if (slug) fetchPost();
  }, [slug]);

  if (!casestudy?.id) return <>Loading...</>;

  return (
    <Container>
      <button
        className="hover:text-sectionTitle my-2 flex items-center gap-1"
        onClick={() => router.back()}
      >
        <ArrowLeft size={14} />
        <span>Go Back</span>
      </button>
      <AnimatedBlock>
        <Section>
          <div className="min-h-screen ">
            <div>
              {/* Main Content */}
              <main className="lg:col-span-3">
                <article className="bg-transparent rounded-lg shadow-sm">
                  {/* Post Header */}
                  <header className="mb-8 pb-6 border-b border-gray-500">
                    <AnimatedText
                      className="ml-[-0.25em] text-2xl md:text-3xl font-bold text-textClr mb-3"
                      text={casestudy?.title}
                    />

                    <div className="text-sm">
                      By {casestudy?.user.name.split(" ")[0]}
                    </div>
                  </header>

                  {/* Markdown Content */}
                  <div className="prose-custom">
                    <MarkdownRenderer content={casestudy?.body_markdown} />
                  </div>
                </article>
              </main>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
              .code-block {
                font-family: "Fira Code", "Monaco", "Cascadia Code",
                  "Roboto Mono", monospace;
                line-height: 1.5;
              }

              .inline-code {
                font-family: "Fira Code", "Monaco", "Cascadia Code",
                  "Roboto Mono", monospace;
              }

              .code-header {
                font-family: "Fira Code", "Monaco", "Cascadia Code",
                  "Roboto Mono", monospace;
              }

              .prose-custom img {
                max-width: 100px;
                height: auto;
              }
            `}</style>
          </div>
        </Section>
      </AnimatedBlock>
    </Container>
  );
}
