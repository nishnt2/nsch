"use client";
import { DevToPost } from "@/lib/types";
import { fetchPostUsingSlug, formatDate } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import AnimatedBlock from "@/components/animation/animated-block";
import Container from "@/components/container";
import Section from "@/components/section";
import React, { useEffect, useState } from "react";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import Link from "next/link";
import AnimatedText from "@/components/animation/animated-text";

export default function Article() {
  const [article, setArticle] = useState<DevToPost>();
  const { slug } = useParams();

  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      try {
        const post = await fetchPostUsingSlug(slug);
        setArticle(post);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPost();
  }, [slug]);

  if (!article?.id) return <></>;

  return (
    <Container>
      <button className="my-2" onClick={() => router.back()}>
        back
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
                      text={article?.title}
                    />

                    <div className="flex items-center justify-between  text-sm">
                      <span className="mr-4">
                        By {article?.user.name.split(" ")[0]} from{" "}
                        <Link
                          href={article.url}
                          target="_blank"
                          className="text-sectionTitle font-semibold hover:text-textClr"
                        >
                          Dev.to
                        </Link>
                      </span>
                      <span>{formatDate(article?.published_at)}</span>
                    </div>
                  </header>

                  {/* Markdown Content */}
                  <div className="prose-custom">
                    <MarkdownRenderer content={article?.body_markdown} />
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
