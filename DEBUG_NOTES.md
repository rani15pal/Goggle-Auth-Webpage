# 🔥 Auth Project Debug Notes--1

## 🐞 Issue: CORS Error

Error:
"Blocked by CORS policy"

### Cause:
- Frontend (Vite) and Backend (Express) running on different ports
- Preflight request not handled

### Mistakes:
- Hardcoded origin (port changed)
- Mixed manual headers with cors middleware

### Fix:
app.use(cors({
  origin: true,
  credentials: true
}));

### Learning:
- CORS is browser security
- OPTIONS request must be handled

## 🐞 Issue: MongoDB Atlas IP Not Whitelisted ----->2

### Error:
Could not connect to any servers in your MongoDB Atlas cluster.
Make sure your IP address is on the IP whitelist.

### Cause:
- I switched to a new laptop/network
- MongoDB Atlas allows only whitelisted IPs
- My current IP was not added → connection blocked

### Fix:
1. Open MongoDB Atlas
2. Go to Network Access
3. Click "Add IP Address"
4. Add:
   0.0.0.0/0  (Allow access from anywhere - for development)

### Result:
- Database connected successfully
- Backend started working

### Learning:
- MongoDB Atlas uses IP-based security
- Every new network/device may need whitelist update
- 0.0.0.0/0 is okay for development, NOT for production