# Vernan Contact Form - React Application

A responsive single-page React application with a contact form integrated with the Vernan Backend API.

## Features

- ✅ Responsive design for multiple screen sizes
- ✅ Form validation (client-side)
- ✅ Email validation
- ✅ Empty form submission prevention
- ✅ API integration with success/error handling
- ✅ Modern UI with gradient design
- ✅ Loading states during submission

## Responsive Breakpoints

The application is fully responsive and tested for:
- 480p (Mobile View)
- 720p (Tablet View)
- 1080p (Desktop View)
- 2732x2048 (iPad)
- 1440x823 (MacBook)

## API Information

**Server Link:** https://vernanbackend.ezlab.in

**API Endpoint:** https://vernanbackend.ezlab.in/api/contact-us/

**Method:** POST

**Request Body:**
```json
{
  "name": "Amit",
  "email": "hsatyamrav@gmail.com",
  "phone": "908765498",
  "message": "kjhgcgj"
}
```

**Response (200 OK):**
```json
{
  "created_at": "2025-10-10T05:27:59.371578Z",
  "email": "hsatyamrav@gmail.com",
  "id": 49,
  "message": "kjhgcgj",
  "name": "Amit",
  "phone": "908765498",
  "updated_at": "2025-10-10T05:27:59.371598Z"
}
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vernan-contact-form
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

## Validation Rules

1. **Empty Form Submission:** All fields are required
2. **Email Validation:** Must be a valid email format (example@domain.com)
3. **Success Message:** "Form Submitted" displayed on successful submission (200 response)
4. **Error Handling:** Network errors and failed submissions are handled gracefully

## Project Structure

```
vernan-contact-form/
├── public/
├── src/
│   ├── components/
│   │   ├── ContactForm.js
│   │   └── ContactForm.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── Vernan_Contact_API.postman_collection.json
├── package.json
└── README.md
```

## Postman Collection

A Postman collection is included in the repository: `Vernan_Contact_API.postman_collection.json`

Import this file into Postman to test the API endpoints.

## Technologies Used

- React 18
- CSS3 (with responsive design)
- Fetch API for HTTP requests

## Design Reference

Figma Design: https://www.figma.com/design/1EUuNvrVUVWuYkTG0OmpMj/EZ-Labs-Assignment

## License

MIT
