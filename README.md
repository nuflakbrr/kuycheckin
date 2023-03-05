## Wikusama Hotel

MERN `(MySQL, Express, React, Node)` stack Hotel Booking App for UKK Framework SMK Telkom Malang.

## To Do List

- [x] Table customer
- [x] Modified booking room endpoint while table customer was created
- [x] Get date date an and add to localStorage
- [x] Filter available room
- [x] Display available room by type room
- [x] Total room
- [x] Get total room and add to localStorage
- [x] Request transaction add to localStorage
- [x] Payment Gateway => get value from localStorage
- [x] Get Booking Data at dashboard admin || receptionist
- [x] Dashboard Customer
- [x] Print Receipt

### Getting Started

First, open your terminal and enter into this project. Then, go into the backend folder and install the required dependencies, and run the development server:

```
# install depedencies
npm install

# run the server
npm run dev
```

Second, open your XAMPP Control Panel (or etc.) and running the server. Then open your phpmyadmin and create database named `db_hotel` or something you like.

Third, don't forget to configure database name on `./backend/config/config.json`. And then running the migrate db command:

```
# running migrate db
sequelize db:migrate
```

Fourth, go into the frontend folder and install the required dependencies, and run the development server:

```
# install depedencies
npm install

# run the server
npm run dev
```

Open [http://localhost:3000](http://localhost:8000) with your browser to see the result.