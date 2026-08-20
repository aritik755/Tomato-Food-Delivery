# 🍅 Tomato - Food Delivery Website

A full-stack food delivery web application built using the **MERN Stack**.  
Tomato allows users to browse food items, explore different categories, manage their cart, place orders, and make secure online payments using **Stripe**.

The project also includes a dedicated **Admin Panel** for managing food items and customer orders.

---

## 🌐 Live Demo

🚧

# ✨ Features

## 👤 User Features

- User Registration
- User Login & Authentication
- JWT-based authentication
- Browse food items
- Explore food by categories
- Add food items to cart
- Remove food items from cart
- Persistent cart for logged-in users
- View cart total
- Place orders
- Stripe payment integration
- Payment verification
- View previous orders
- Responsive user interface

---

## 👨‍💼 Admin Features

- Admin dashboard
- Add new food items
- Upload food images
- View all food items
- Delete food items
- View customer orders
- Manage order status
- Separate admin panel

---

# 💳 Payment Integration

Tomato uses **Stripe** for online payments.

### Payment Flow

```text
User
  ↓
Add items to Cart
  ↓
Place Order
  ↓
Create Order
  ↓
Stripe Checkout
  ↓
Complete Payment
  ↓
Verify Payment
  ↓
Order Confirmed
  ↓
My Orders
```
