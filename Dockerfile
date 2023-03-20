FROM node:18-alpine

COPY index.js package* .

RUN npm i

CMD npm run start