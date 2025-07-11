import AnimatedBlock from "@/components/animation/animated-block";
import Container from "@/components/container";
import Section from "@/components/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatDate, getAllPosts } from "@/lib/utils";
// import Image from "next/image";
import Link from "next/link";

export default async function Article() {
  const posts = await getAllPosts();

  return (
    <Container>
      <AnimatedBlock>
        <Section title="articles">
          {posts.map((article) => (
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
                  {/* <div className="flex items-center space-x-2">
                    <Image
                      className="rounded-[50%]"
                      src={article.user.profile_image}
                      height={26}
                      width={26}
                      alt="profile-avatar"
                    />
                    <span className=" font-medium">{article.user.name}</span>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </Section>
      </AnimatedBlock>
    </Container>
  );
}
