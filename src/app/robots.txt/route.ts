import { NextResponse } from 'next/server'

export async function GET() {
  const robots = `# Main search engine crawlers
User-agent: Googlebot
User-agent: Bingbot
User-agent: Slurp
Allow: /
Allow: /*?lang=*
Allow: /search?q=*
Disallow: /search/realtime
Disallow: /search/*/grid
Disallow: /*?sort=*
Disallow: /*?filter=*
Disallow: /*/followers
Disallow: /*/following
Disallow: /account/*
Disallow: /admin/*
Disallow: /api/*

# Social Media Crawlers - Allow them to crawl for rich previews
User-agent: Facebookbot
User-agent: Twitterbot
Allow: /
Allow: /products/*
Allow: /blog/*
Disallow: /account/*
Disallow: /admin/*

# Block all other crawlers from non-essential areas
User-agent: *
Allow: /
Allow: /products/*
Allow: /blog/*
Allow: /about/*
Disallow: /search
Disallow: /api/*
Disallow: /admin/*
Disallow: /*?*
Disallow: /tmp/*
Disallow: /assets/*

# Sitemap declaration
Sitemap: https://www.truedeal4u.com/sitemap.xml`

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600',
      'X-Robots-Tag': 'index,follow'
    },
  })
} 
