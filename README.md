# InvTrack - Inventory Track API

# What will the API do?

This API will manage inventory stock levels, track orders and suppliers, and store user credentials for order processing. It ensures efficient inventory control, seamless order management, and secure user authentication.

# How will your API utilize a login system?
My API will implement a login system using OAuth GitHub authorization

# What database will you use?
MongoDB
# How will the data be stored in your database?

The data in my MongoDB database will be stored using a document-based structure in multiple collections. Each collection will contain JSON-like documents, allowing flexible and scalable data management.
Storage Approach:
Products Collection – Stores product details with supplier references.
Suppliers Collection – Maintains supplier information.
Orders Collection – Tracks customer and restock orders.
Users Collection – Stores authenticated user data from GitHub OAuth
How would a frontend be able to manage authentication state based on the data you provide?

A frontend application can manage authentication state using OAuth with GitHub
What pieces of data in your app will need to be secured? How will you demonstrate web security principles in the development of this app?

1.	 Secure Authentication & Authorization
       -	OAuth 2.0 with GitHub – Avoids storing passwords directly.
2.	Secure Data Storage
       -	Environment Variables – API keys and database credentials are stored in .env and never exposed.
3.	Secure API Communication
       -	HTTPS Enforcement – Ensures encrypted communication.
       -	CORS Policy – Restricts frontend access to trusted domains.

#What file structure and program architecture will you use for this project (how will you organize your node project)? Why?

My API will follow the MVC (Model-View-Contorller) pattern. It is easy to maintain and easy to pinpoint  if there are a problem or issue because the functionality is separate from each other., 
What are potential stretch challenges that you could implement to go above and beyond?

When a user purchases a product, the system should not only create an order but also update the inventory count for the product in the database, ensuring that inventory levels are immediately reflected in real-time.
API Endpoint Planning
For this section, you’ll plan out what API endpoints you’ll need for your project.

#Products Collection

●	Product
○	POST /product/
○	PUT /product/{orderId}
○	GET /product/{orderId}
○	GET /product/
○	DELETE /product/{orderId}

●	Supplier
○	POST /supplier/
○	PUT / supplier /{orderId}
○	GET / supplier /{orderId}
○	GET / supplier
○	DELETE /supplier/{orderId}

●	Order
○	POST /order/
○	PUT / order /{orderId}
○	GET / order /{orderId}
○	GET / order
○	DELETE / order /{orderId}

●	user
○	POST /user/
○	PUT / user /{orderId}
○	GET / user /{orderId}
○	GET / user
○	DELETE / user /{orderId}

