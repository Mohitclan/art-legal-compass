import { useParams, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import MDXRenderer from "@/components/mdx/MDXRenderer";
import ShareButtons from "@/components/ShareButtons";
import ReadingProgress from "@/components/ReadingProgress";
import PrevNext from "@/components/PrevNext";
import Newsletter from "@/components/Newsletter";
import EnhancedFAQ from "@/components/authority/EnhancedFAQ";
import ArticleMeta from "@/components/authority/ArticleMeta";
import PrefetchLink from "@/components/PrefetchLink";
import { posts, getPost, blogCategories, getAuthor } from "@/content/blog";
import { readingTimeMinutes } from "@/content/authority";
import { recommend, prevNext } from "@/lib/content/recommend";
import { useSEO, useCanonical } from "@/lib/seo/hooks";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildArticleSchema,
  buildPersonSchema,
  buildOrganizationSchema,
} from "@/lib/seo";

const BlogPostPage = () => {
  const { slug = "" } = useParams();
  const post = getPost(slug);
  const canonical = useCanonical(post ? `/blog/${post.slug}` : "/blog");
  const seo = useSEO({
    slug: post ? `/blog/${post.slug}` : "/blog",
    title: post?.title ?? "Article",
    description: post?.description ?? "",
    keywords: post?.keywords,
    ogImage: post?.hero?.src,
    type: "article",
    publishedAt: post?.publishedAt,
    updatedAt: post?.updatedAt,
  });
  if (!post) return <Navigate to="/blog" replace />;

  const breadcrumbs = [
    { name: "Home", slug: "/" },
    { name: "Blog", slug: "/blog" },
    { name: post.title, slug: `/blog/${post.slug}` },
  ];

  const related = recommend(post, posts, 3);
  const nav = prevNext(post, posts);
  const readingMinutes = readingTimeMinutes(
    [post.excerpt],
    post.body.map((b) => ("text" in b ? b.text : "items" in b ? b.items.join(" ") : "")),
    post.faqs?.map((f) => `${f.q} ${f.a}`) ?? [],
  );
  const author = getAuthor(post.author);
  const category = blogCategories.find((c) => c.slug === post.category);

  const schemas = [
    buildBreadcrumbSchema(breadcrumbs),
    buildOrganizationSchema(),
    buildPersonSchema(),
    buildArticleSchema({
      slug: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      type: "article",
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
    }),
    ...(post.faqs?.length ? [buildFAQSchema(post.faqs)] : []),
  ];

  return (
    <>
      <SEO {...seo} jsonLd={schemas} />
      <ReadingProgress />

      <header className="bg-gradient-to-br from-primary via-navy to-primary pt-32 pb-14 text-ivory">
        <div className="container mx-auto px-6 max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          {category && (
            <PrefetchLink to="/blog" className="mt-4 inline-block text-xs uppercase tracking-widest text-gold hover:underline">
              {category.name}
            </PrefetchLink>
          )}
          <h1 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-4 leading-tight">{post.title}</h1>
          <p className="text-lg text-ivory/85 max-w-3xl">{post.excerpt}</p>
          <div className="mt-6"><ArticleMeta readingMinutes={readingMinutes} updatedAt={post.updatedAt ?? post.publishedAt} /></div>
        </div>
      </header>

      <article className="container mx-auto px-6 max-w-3xl py-12">
        <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
          <p className="text-sm text-muted-foreground">By {author?.name ?? "Editorial"}</p>
          <ShareButtons url={canonical} title={post.title} />
        </div>
        <MDXRenderer blocks={post.body} />
        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="text-[11px] uppercase tracking-widest text-muted-foreground border border-border rounded px-2 py-1">#{t}</span>
          ))}
        </div>
        <PrevNext basePath="/blog" prev={nav.prev} next={nav.next} />
      </article>

      {post.faqs?.length ? <EnhancedFAQ faqs={post.faqs} /> : null}

      {related.length > 0 && (
        <section className="py-14 bg-secondary/20">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-playfair text-3xl font-bold text-primary text-center mb-2">Related Articles</h2>
            <div className="h-1 w-24 bg-gradient-gold mx-auto mb-10" />
            <ul className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <li key={r.slug}>
                  <PrefetchLink to={`/blog/${r.slug}`} className="block h-full p-6 rounded-md border-2 border-border hover:border-gold transition-colors">
                    <h3 className="font-playfair text-lg font-semibold text-primary mb-2">{r.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{r.excerpt}</p>
                  </PrefetchLink>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <Newsletter />
    </>
  );
};

export default BlogPostPage;
