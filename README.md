# Webpack TypeScript Mocha VSCode and Docker Example

An example project which shows how to...

* Use Webpack to create a distribution bundle
* Write TypeScript and tanspile it into JavaScript
* Use Mocha to write tests
* Set breakpoints and debug on VSCode (or command line)
* All within a Docker development environment for reproducibilty

TODOs:

* remove -no-bin-links and custom volume creations - i.e. use Windows OS to host the file system so others can run easily
* try to reduce the dependency list in package.json
* try to change the Docker root image to alpine or the like so it is much smaller and much faster

#  Build Image

To add new System dependencies:

    docker-compose build

To install all dependencies on a new system

    npm install -no-bin-links

# Build Source

    docker-compose run build
    #docker-compose run bash
    #npm run build
    ##npx webpack

# Test

    docker-compose run test
    #docker-compose run bash
    #npm run test
    ##TESTBUILD=true npx webpack
    ##npx mocha test-dist/main.js

# Run Dev service like VSCode does, but from command-line

    docker-compose -f docker-compose.yaml -f .devcontainer/docker-compose.yml run dev

# Ultraclean Build

    rm -rf dist node_modules package-lock.json
    npm install -no-bin-links
