FROM python

RUN apt-get update

# Python installation
RUN apt-get -y install python3-pip
RUN pip3 install nltk
RUN pip3 install numpy
RUN pip3 install flask
RUN pip3 install waitress

WORKDIR /usr/src/app

COPY . .

# Project modules installation
RUN python3 nltk_modules.py
CMD python3 ts.py

EXPOSE 8080
