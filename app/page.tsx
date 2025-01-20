// app/page.tsx

import ArticleCard from "@/components/articles/article-card";
import FeaturedArticle from "@/components/articles/feature-article";
import BenefitsCard from "@/components/membership/benefits-card";
import MainNav from "@/components/navigation/main-nav";
import SearchBar from "@/components/search/search-bar";

export default function Home() {
  return (
    <>
      <MainNav />

      <main className="container mx-auto px-4 py-8">
        <SearchBar />

        <div className="grid lg:grid-cols-[1fr,300px] gap-8 mt-8">
          <div className="space-y-8">
            <FeaturedArticle
              title="Revealed: The latest Which? energy company rankings"
              description="Three energy firms have been named Which? Recommended Providers for 2025"
              date="17 Jan 2025"
              imageUrl="/placeholder.jpg"
              href="/article/energy-rankings"
            />

            <div className="space-y-6">
              <ArticleCard
                title="John Lewis sale 2025: Best deals now live"
                date="14 Jan 2025"
                imageUrl="/placeholder.jpg"
                href="/article/john-lewis-sale"
              />
              <ArticleCard
                title="Best cottage pies: Charlie Bigham's vs supermarket own labels"
                date="11 Jan 2025"
                imageUrl="/placeholder.jpg"
                href="/article/cottage-pies"
              />
              <ArticleCard
                title="I'm a data expert - here are 6 things I'd never do with my personal info"
                date="13 Jan 2025"
                imageUrl="/placeholder.jpg"
                href="/article/data-security"
              />
            </div>
          </div>

          <aside className="space-y-6">
            <BenefitsCard />

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                A Which? Full Access subscription is now £49.50 for your first
                year and includes our new Car Guide
              </p>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
