if (process.client && process.env.NODE_ENV === "production") {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-LXD5LJXP2Y");
  console.log("ga4 worked");
}
