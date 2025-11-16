import Head from 'next/head'

export default function SEO({ title, description, url, image, children }){
  const siteName = 'Heartfelt Living Renovations'
  const metaTitle = title ? `${title} | ${siteName}` : siteName
  const metaUrl = url || process.env.NEXT_PUBLIC_SITE_URL || 'https://heartfelthomerenovations.com'

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={metaUrl} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {children}
    </Head>
  )
}
