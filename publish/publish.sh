#!/bin/bash
VERSION=$(cat package.json | grep version | awk '{print $2}' | sed 's/\"//g' | sed 's/\,//g' | sed 's/-/ /' | awk '{print $2}')
if  cat package.json| grep version | grep rc > /dev/null
then
npm publish --tag "rc"
else
npm publish
fi
