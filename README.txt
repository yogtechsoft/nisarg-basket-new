NISARG BASKET - Bootstrap 5 ecommerce homepage starter

Files:
- index.html
- css/style.css
- js/main.js

Run:
1. Extract the ZIP.
2. Open index.html in a browser, or serve the folder using your IDE's Live Server.
3. Bootstrap 5.3.3, Bootstrap Icons, and Google Fonts load from CDNs, so internet access is required.
4. Product images are remote Unsplash URLs; replace with your client's licensed product images before launch.

Spring Boot + Thymeleaf integration:
- Copy index.html to src/main/resources/templates/index.html
- Copy css/ to src/main/resources/static/css/
- Copy js/ to src/main/resources/static/js/
- Keep image URLs as-is or download licensed images into src/main/resources/static/img/
- Add xmlns:th="http://www.thymeleaf.org" to the html element.
- Change asset references to th:href="@{/css/style.css}" and th:src="@{/js/main.js}".
- Create a @Controller route for "/" returning "index".

Important:
This is a frontend demo. Cart count is browser-side only. Login, inventory, real cart persistence, checkout, order processing, payment gateway, and database integration must be implemented in Spring Boot.
Before commercial use, verify all third-party image and asset licenses.
