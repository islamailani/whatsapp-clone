FROM node:latest

# Add node-gyp for bcrypt build support
RUN yarn global add node-gyp

# Create app directory
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server

# Setup the environment
ENV NODE_ENV production
ENV PATH /usr/src/server/bin:$PATH
ENV TALK_PORT 4000
EXPOSE 4000

# Install app dependencies
COPY package.json yarn.lock /usr/src/server/
# RUN yarn install --production
RUN yarn install
RUN yarn codegen

# Bundle server source
COPY . /usr/src/server

CMD ["yarn", "start"]
