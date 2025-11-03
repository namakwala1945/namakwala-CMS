export default [
  "strapi::errors",

  // ✅ Allow CORS from your frontend
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: ["*"], // You can restrict later: ["http://localhost:3000"]
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      keepHeadersOnError: true,
    },
  },

  // ✅ Allow embedding PDFs and images inside <iframe> or <img>
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "default-src": ["'self'", "data:", "blob:", "https:", "http:"],
          "img-src": ["'self'", "data:", "blob:", "https:", "http:"],
          "media-src": ["'self'", "data:", "blob:", "https:", "http:"],
          "frame-src": ["'self'", "data:", "blob:", "https:", "http:"],
          "connect-src": ["'self'", "https:", "http:"],
          "frame-ancestors": ["*"], // ✅ allow embedding in iframes
        },
      },
    },
  },

  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
