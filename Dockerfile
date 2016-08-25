FROM ruby:2.2.4
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY Gemfile /usr/src/app
COPY Gemfile.lock /usr/src/app

RUN gem install foreman && bundle install
COPY . /usr/src/app 
CMD ["foreman", "up"]
