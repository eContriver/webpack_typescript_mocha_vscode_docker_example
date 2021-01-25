# Copyright (c) 2021 eContriver LLC

FROM ubuntu:20.04

RUN dpkg --add-architecture i386

ENV TZ=America/Denver
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ENV DEBIAN_FRONTEND=noninteractive 
RUN apt-get update && apt-get install -y \
  curl \
  unzip \
  vim-gtk3 \
  vim \
  nodejs \
  npm \
  locate \
  git \
  sudo \
  && apt-get clean && apt-get purge

RUN npm install -g webpack webpack-cli typescript ts-loader seedrandom ts-node
