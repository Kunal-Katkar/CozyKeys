# CozyKeys
This is a full-stack property rental and booking platform where users can discover, list, and reserve short-term stays. The application is built using the MERN stack, providing a seamless experience for both guests and hosts.

![Uploading image.png…]()

## Features & Integrations

| Feature/Integration         | Purpose/Use Case                                      |
|----------------------------|-------------------------------------------------------|
| **Passport.js**            | User authentication                                   |
| **Session & Cookies**      | Maintain login state                                  |
| **JWT**                    | Token-based authentication (if implemented)           |
| **Password Hashing**       | Secure password storage                               |
| **Multer**                 | File uploads (images)                                 |
| **Cloudinary**             | Cloud image storage                                   |
| **Mapbox Geocoding**       | Convert address to coordinates                        |
| **Mapbox GL JS**           | Render maps on frontend                               |
| **MongoDB**                | Persistent data storage                               |
| **Mongoose**               | Data modeling and validation                          |
| **EJS**                    | Dynamic HTML rendering                                |
| **Bootstrap/Custom CSS/JS**| UI and interactivity                                  |
| **Joi**                    | Data validation (if used)                             |
| **Custom Middleware**      | Error/auth/data validation handling                   |
| **Flash Messages**         | User feedback                                         |
| **MVC Pattern**            | Code organization                                     |
| **Express Routers**        | RESTful API routing                                   |
| **Seed Scripts**           | Initial data population                               |
| **.env/.gitignore**        | Security and best practices                           |

---

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/cozykeys.git
   cd cozykeys
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your MongoDB URI, Mapbox token, Cloudinary credentials, and session secret.

4. **Run the application:**
   ```bash
   npm start
   ```

5. **Access the app:**
   - Visit `http://localhost:3000` in your browser.

---

## Folder Structure

- `models/` – Mongoose schemas for Users, Listings, Reviews
- `controllers/` – Business logic for each resource
- `routes/` – Express routers for users, listings, reviews
- `views/` – EJS templates for UI
- `public/` – Static assets (CSS, JS)
- `utils/` – Utility functions and error handling
- `init/` – Database seeding scripts

---

## Security

- Sensitive credentials are stored in `.env` (not tracked by git).
- Passwords are securely hashed.
- User authentication and session management are implemented.

---

## License

MIT
