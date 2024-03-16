FROM node:16-alpine

WORKDIR /app

COPY . .

RUN yarn \
    && yarn generate \
    && cp -rf build/kiwrious-config build/_nuxt/kiwrious-config

ENV HOST 0.0.0.0

ENV PORT 3000

EXPOSE 3000

CMD ["yarn", "start"]