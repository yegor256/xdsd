#!/bin/bash -e

SRC=$(pwd)/site
cd ${SRC}
rm -rf _site
jekyll build

CLONE=$(mktemp -d -t xdsd)
git clone git@github.com:yegor256/xdsd.git ${CLONE}
cd ${CLONE}
git checkout gh-pages
rm -rf *
cp -R $SRC/_site/* .

git add .
git commit -am "new site version"
git push origin gh-pages

rm -rf ${CLONE}
