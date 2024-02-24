FROM php:8.2-apache

# Set working directory
WORKDIR /var/www/html

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    curl \
    libonig-dev \
    libxml2-dev \
    nano

# Install PHP extensions
RUN docker-php-ext-install mbstring zip exif pcntl bcmath gd soap intl

# Enable Apache modules
RUN a2enmod rewrite

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set ServerName environment variable
ENV APACHE_SERVER_NAME localhost

# Update Apache configuration file with ServerName
RUN echo "ServerName $APACHE_SERVER_NAME" >> /etc/apache2/apache2.conf

# Adjust permissions
RUN chown -R www-data:www-data /var/www/html && chmod -R 755 /var/www/html

# Copy everything to working directory
COPY . .

# Install Composer dependencies
RUN composer install --no-scripts --no-autoloader

# Expose port and start Apache
EXPOSE 80
CMD ["apache2-foreground"]