export function SEO({children}) {
    return (
      <>
        <title>GotsChops.com</title>
        <meta name="facebook-domain-verification" content="rh8bb89nz3s37puaf30iajf7sj77fu" />
        <meta
        name="twitter:url"
        content={`https://www.foobar.tld/${location.pathname}`}
        />
        {children}
      </>
    )
  }