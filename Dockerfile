FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Bundle app source
COPY . .

# Build app
RUN yarn build

# Start app
CMD [ "yarn", "start" ]
