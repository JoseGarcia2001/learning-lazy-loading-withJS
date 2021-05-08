/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  buildOptions: {
    baseUrl: "https://josegarcia2001.github.io/learning-lazy-loading-withJS",
  },
};
