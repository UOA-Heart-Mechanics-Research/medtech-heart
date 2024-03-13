FROM node:16-alpine

MAINTAINER LinkunGao<lgao142@aucklanduni.ac.nz>

WORKDIR /app

COPY . .

RUN yarn

ENV HOST 0.0.0.0

ENV PORT 5173

EXPOSE 5173

CMD ["yarn", "dev"]