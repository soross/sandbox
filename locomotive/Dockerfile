FROM ruby:2.4

RUN apt-get update -qq \
      && apt-get install -y nodejs git \
      && rm -rf /var/lib/apt/lists/*

ENV APP_HOME /app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME
ADD Gemfile* $APP_HOME/

ENV BUNDLE_GEMFILE=$APP_HOME/Gemfile \
  BUNDLE_PATH=/bundle

RUN bundle install

ADD . $APP_HOME

EXPOSE 8080
