// components/Articles/ArticleCard.tsx
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  title: string;
  date: string;
  imageUrl: string;
  href: string;
}

const ArticleCard = ({ title, date, imageUrl, href }: ArticleCardProps) => {
  return (
    <Link href={href} className="block group">
      <article className="grid grid-cols-[100px,1fr] gap-4">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>

        <div>
          <h3 className="font-bold mb-2 group-hover:text-blue-600">{title}</h3>
          <time className="text-sm text-gray-500">{date}</time>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
