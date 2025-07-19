export const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Công ty TNHH My Candy Việt Nam",
    "url": "https://mycandyvn.com",
    "logo": "https://mycandyvn.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+84-833-025-026",
      "contactType": "customer service",
      "areaServed": "VN",
      "availableLanguage": "Vietnamese"
    },
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Số 10 - LK3 Khu nhà ở thương mại tổ 6",
        "addressLocality": "Xuân Phương, Nam Từ Liêm",
        "addressRegion": "Hà Nội",
        "addressCountry": "VN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "TDP Lương Tràng",
        "addressLocality": "Tân Liêm, Phủ Lý",
        "addressRegion": "Hà Nam",
        "addressCountry": "VN"
      }
    ],
    "sameAs": [
      "https://facebook.com/mycandyvn",
      "https://instagram.com/mycandyvn"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Bánh Trứng Chảy MyCandy",
    "description": "Bánh trứng chảy MyCandy Việt Nam với hương vị thơm ngon, chất lượng cao",
    "brand": {
      "@type": "Brand",
      "name": "MyCandy Việt Nam"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Công ty TNHH My Candy Việt Nam"
    },
    "category": "Bánh kẹo",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "VND",
      "seller": {
        "@type": "Organization",
        "name": "MyCandy Việt Nam"
      }
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MyCandy Việt Nam",
    "url": "https://mycandyvn.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://mycandyvn.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};