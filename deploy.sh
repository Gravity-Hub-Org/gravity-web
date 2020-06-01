#!/bin/bash


main () {
  docker build -t gravity .
  docker run -itd --name gh -p 5000:80 gravity
}

main