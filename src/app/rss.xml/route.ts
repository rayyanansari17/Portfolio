const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const posts = [
  {
    title: "Building scalable web apps with Next.js",
    description:
      "A practical look at patterns for building high-performance, maintainable Next.js applications.",
    pubDate: "2026-04-05T00:00:00.000Z",
    slug: "building-scalable-web-apps-with-nextjs",
  },
  {
    title: "The art of subtle micro-interactions",
    description:
      "How thoughtful interface motion and feedback loops improve product usability and delight.",
    pubDate: "2026-03-20T00:00:00.000Z",
    slug: "the-art-of-subtle-micro-interactions",
  },
  {
    title: "Why I switched from VS Code to Cursor",
    description:
      "A developer-focused perspective on workflow speed, AI assistance, and day-to-day coding ergonomics.",
    pubDate: "2026-02-10T00:00:00.000Z",
    slug: "why-i-switched-from-vs-code-to-cursor",
  },
];

export function GET() {
  const items = posts
    .map((post) => {
      const postUrl = `${siteUrl}/#thoughts`;

      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <description><![CDATA[${post.description}]]></description>
          <link>${postUrl}</link>
          <guid isPermaLink="false">${post.slug}</guid>
          <pubDate>${new Date(post.pubDate).toUTCString()}</pubDate>
        </item>
      `;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>Rayyan Shaji Ansari - Recent Posts</title>
      <description>Recent engineering, design, and product thoughts.</description>
      <link>${siteUrl}</link>
      <language>en-us</language>
      ${items}
    </channel>
  </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
