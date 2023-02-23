## Wikusama Hotel

MERN `(MySQL, Express, React, Node)` stack Hotel Booking App for UKK Framework SMK Telkom Malang.

## To Do List

- [ ] Table customer
- [ ] Modified booking room endpoint while table customer was created
- [ ] Get date date an and add to localStorage
- [ ] Filter available room
- [ ] Display available room by type room
- [ ] Total room
- [ ] Get total room and add to localStorage
- [ ] Request transaction add to localStorage
- [ ] Payment Gateway => get value from localStorage

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