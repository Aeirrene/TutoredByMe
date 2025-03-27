# TutoredByMe

TutoredByMe is a simple full-stack tutoring website that allows students to explore subjects I offer and request sessions in a format that suits them.

---

## Features

- Interactive landing page with subjects and tutoring formats
- Contact form that sends real emails
- Booking form that includes selected format and details
- Fully responsive layout
- Smart backend email routing via Nodemailer

---

## Technologies Used

**Frontend**

- React
- Tailwind CSS
- React Router DOM

**Backend**

- Node.js
- Express.js
- Nodemailer

**Other**

- Git & GitHub
- Gmail SMTP (App Password)

---

## How to Run It Locally

### 1. Clone the repo

```bash
git clone https://github.com/Aeirrene/TutoredByMe.git
cd TutoredByMe
```

### 2. Set up the client

```bash
cd client
npm install
npm start
```

### 3. Set up the server

```bash
cd ../server
npm install
```

### 4. Create a `.env` file in `/server`

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

> Your Gmail must have 2FA enabled and use an [App Password](https://support.google.com/accounts/answer/185833?hl=en)

### 5. Start the server

```bash
node index.js
```

---

The site runs on `localhost:3000` and the backend listens on `localhost:5000`. You’ll now receive contact and booking form messages straight to your inbox.
