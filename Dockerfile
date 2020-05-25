FROM node:13-alpine as gravity

WORKDIR /gh

COPY src /gh/src
COPY nuxt.config.js package-lock.json package.json /gh/

RUN apk update && apk upgrade && apk add --no-cache bash git openssh \
    && rm -rf /var/cache/apk/* \
    && cd /gh \
    && npm install \
    && npm run build \
    && npm run generate

FROM nginx:stable-alpine as nginx
COPY --from=gravity /gh/dist /var/www/html
RUN mkdir -p /etc/nginx/sites-enabled
# COPY ./nginx.conf /etc/nginx/
# COPY ./default.conf /etc/nginx/sites-enabled/default.conf
RUN ls -la /var/www/html
RUN chmod -R 0777 /var/www/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]