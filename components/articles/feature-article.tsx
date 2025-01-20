// components/Articles/FeaturedArticle.tsx
import Image from "next/image";
import Link from "next/link";

interface FeaturedArticleProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  href: string;
}

const FeaturedArticle = ({
  title,
  description,
  date,
  imageUrl,
  href,
}: FeaturedArticleProps) => {
  return (
    <Link href={href} className="block group">
      <article className="grid md:grid-cols-2 gap-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600">
            {title}
          </h2>
          <p className="text-gray-600 mb-2">{description}</p>
          <time className="text-sm text-gray-500">{date}</time>
        </div>
      </article>
    </Link>
  );
};

export default FeaturedArticle;
