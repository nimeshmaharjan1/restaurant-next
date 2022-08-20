const withLess = require("next-with-less");
module.exports = withLess({
  reactStrictMode: true,
  webp: {
    preset: "default",
    quality: 100,
  },
  images: {
    domains: [
      "tmdb.org",
      "themoviedb.org",
      "64.media.tumblr.com",
      "www.ezcater.com",
      "thumbs.dreamstime.com",
      "c.pxhere.com",
    ],
  },
});
