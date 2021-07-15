## Video Pixelate

 1. Environment
  - Node : above 14
  - PHP: above 7.3 (7.3 will be better)
  - npm: 6
 2. Clone library
 3. Install dependency.
   - FFMpeg (latest which is supporting frei0r)
   - Frei0r plugins
   - php-xml, php-mbstring
 4. Install
   - Web server
     npm install
     npm run prod
     composer install
   - Socket Server
     npm install
     pm2 start node index.js
