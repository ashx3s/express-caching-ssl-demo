# Cache SSL Express Demo

This repository demonstrates caching and header configuration for a web security course.

## Dependencies

- [Express](https://expressjs.com)
- [Helmet](https://helmetjs.github.io/)
- [OpenSSL](https://www.openssl.org/)
- [EJS](https://github.com/mde/ejs)
- [Vercel for deployment](https://vercel.com)
- [Open Weather API](https://open-meteo.com/en/docs#latitude=51.0501&longitude=-114.0853&current=&minutely_15=&hourly=temperature_2m&daily=&models=)

## Notes on Caching

### Time Conversions

- Caches are tracked in seconds
- So if you want to cache 30 days:
  - 30 \* 24 = 720 hours
  - 720 \* 60 = 43200 minutes
  - 43200 \* 60 = 2592000 seconds
    --> 30 days === 2592000 seconds

### Check Your Caches

- Use the **Network** tab in the dev too explore caching effects

## SSL

- Generate private key `opnssl genrsa -out private-key.pem 2048`
- Command to make a 1 year cert: `openssl req -new -x509 -key private-key.pem -out certificate.pen -days 365`

### Express and Https

- pass your app into the https server

## Articles and Resources

- [Article: Caching Header Best Practices](https://simonhearne.com/2022/caching-header-best-practices/)
- [Tutorial: EJS in an Express App](https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application)
- [Express View Engine Integration](https://expressjs.com/en/guide/using-template-engines.html)
- [What is hsts and how do you use it?](https://www.howtogeek.com/devops/what-is-hsts-and-how-do-you-set-it-up/)
- [Docs: node https](https://nodejs.org/api/https.html)
- [Express and https](https://adamtheautomator.com/https-nodejs/)
