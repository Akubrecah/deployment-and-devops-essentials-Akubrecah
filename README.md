# Food Delivery App

A full-stack food delivery application with User Frontend, Admin Panel, and Backend Server.

## Prerequisites

- Node.js installed
- MongoDB installed and running locally (or a MongoDB Atlas URI)

## Installation & Setup 

### 1. Backend Server

Navigate to the `server` directory and install dependencies:

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory with the following content:

```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/food-del
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Start the server:

```bash
npm run server
# OR
node server.js
```

The server will run on `http://localhost:4000`.

### 2. Admin Panel

Navigate to the `admin` directory and install dependencies:

```bash
cd admin
npm install
```

Start the admin panel:

```bash
npm run dev
```

The admin panel will run on `http://localhost:5173` (or similar).

### 3. User Frontend (Client)

Navigate to the `client` directory and install dependencies:

```bash
cd client
npm install
```

Start the user app:

```bash
npm run dev
```

The user app will run on `http://localhost:5174` (or similar).

## Usage

1.  Open the **Admin Panel** to add food items.
2.  Open the **User App** to browse the menu, add items to the cart, and place orders.

## Troubleshooting

### Error: `EMFILE: too many open files`

If you see this error when running `npm run dev`, it means your system's file watcher limit is too low. Run the following command to increase it:

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```