FROM node:8

WORKDIR /var/www/vhost/app/products/worklogs

RUN alias l="ls -al"

RUN npm install -g pm2

#   Install vim (Optional)
RUN apt-get -y update --fix-missing
RUN apt-get -y install vim
#   End of install vim (optional)


RUN apt-get -y update --fix-missing
RUN apt-get -y install nginx

COPY certs/server.crt /root/certs/server/
COPY certs/server.key /root/certs/server/

RUN rm /etc/nginx/sites-enabled/default
ADD ./node-nginx-80.conf /etc/nginx/sites-available
ADD ./node-nginx-443.conf /etc/nginx/sites-available

RUN ln -s /etc/nginx/sites-available/node-nginx-80.conf /etc/nginx/sites-enabled/node-nginx-80
RUN ln -s /etc/nginx/sites-available/node-nginx-1-443.conf /etc/nginx/sites-enabled/node-nginx-443

#   End of install NGINX 

EXPOSE 3000
EXPOSE 443
EXPOSE 80

RUN echo "192.168.13.5      node-nginx.local" >> /etc/hosts

COPY start.sh /
RUN chmod +x /start.sh
CMD ["/start.sh"]