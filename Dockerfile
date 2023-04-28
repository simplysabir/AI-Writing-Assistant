FROM node:20-bullseye
WORKDIR /data
#RUN groupadd -r node -g 433 && \
#    useradd -u 431 -r -g node --home /home/node/ --create-home -s /sbin/nologin -c "Docker image user" node
COPY . .
RUN chown -R node:node /data
USER node
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]
