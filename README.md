# HerFil General Trading PLC

This is a web application that showcases the products and services of HerFil General Trading PLC, a company that sells and rents machineries in Ethiopia. The web application allows users to browse through different categories of products, view the details of each product, and contact the company for inquiries or orders.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Features](#features)
- [Challenges](#challenges)
- [License](#license)
- [Credits](#credits)

<a name="installation"></a>

## Installation

To install and run this project, you need to have Node.js, npm, Composer, and Laravel installed on your machine. Then, follow these steps:

1. Clone this repository to your local machine using:

   ```bash
   git clone https://github.com/Abebe-Biru/herfil-project.git
2. Navigate to the frontend folder using:

   ```bash
   cd herfil-project/frontend
3. Install the frontend dependencies using:

   ```bash
   npm install
4. Navigate to the backend folder using:

   ```bash
   cd herfil-project/api
5. Install the backend dependencies using:

   ```bash
   composer install
6. Copy the `.env.example` file and rename it to `.env`.
7. Generate an application key using:

   ```bash
   php artisan key:generate
8. Create a MySQL database and update the database credentials in the `.env` file.
9. Run the database migrations using:

   ```bash
   php artisan migrate
    ```

10. Start the backend server using:

    ```bash
    php artisan serve
    ```

11. Start the frontend server using:

  ```bash
   npm run dev
    ```

12. Open your browser and go to `http://localhost:5173` to see the project in action.

<a name="usage"></a>
## Usage

To use the project, you can navigate through the following pages:

- Homepage: This page displays 'nav-bar' with the company's logo, navigation links, products, stats, clients, testimonials, about and contact us sections, and a footer with some useful links.

![Homepage](https://i.imgur.com/vTSgPB8.png)

- Products: This page displays a list of products grouped by categories, such as for sell or rental. You can filter the products by category.

![Products](https://i.imgur.com/et4sxaI.png)

- Single Product: This page displays the details of a single product, such as name, price, description, stock, multiple images, and magnified images.

![Product](https://i.imgur.com/4R19o6v.png)

- About: This page displays some information about the company, such as its history, vision, mission, values, etc.

![About](https://i.imgur.com/mh7gPBv.png)

- Contact Us: This page displays a form that you can use to send a message to the company. You can also see the company's address, phone number and email address on this page.

![Contact](https://i.imgur.com/muquipa.png)

<a name="technologies"></a>
## Technologies

I built this project using the following technologies and tools:

- React.js: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- Laravel: A PHP framework for web development.
- MySQL: A relational database management system.
- Vite: A build tool for fast development and production.
- Postman: An API testing tool that I used to test the APIs.
- Visual Studio Code: A code editor that I used to write and debug my code.
- Git and GitHub: Version control tools that I used to manage my code.

<a name="features"></a>
## Features

The project has the following features:

- Responsive design: The project adapts to different screen sizes and devices using Tailwind CSS utilities.
- Dynamic data: The project fetches data from a REST API built with Laravel and MySQL database.
- CRUD operations: The project allows creating, reading, updating, and deleting data from the database using Laravel's Eloquent ORM and API resources.
- Search and filter: The project allows filtering products by category.
- Form validation: The project validates user input on both frontend and backend using React Hook Form and Laravel's validation rules.

<a name="challenges"></a>
## Challenges

Some of the challenges and limitations that I faced while building this project were:

- Challenge 1: This challenge was very interesting because I had to find a way to design a database schema and an API endpoint that can handle multiple images for each product to show in details.
- Challenge 2: This challenge was very frustrating because I had to use the 'react-image-magnify' package which is not compatible with Tailwind CSS and newer version of React.js. I had to find an alternative solution or modify the package code to make it work with my project.

<a name="license"></a>
## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

<a name="credits"></a>
## Credits
This project was created by [Abebe Biru](https://www.linkedin.com/in/abebe-biru/).

Finally, I would like to thank the following sources and resources for helping me build this project:

- [JS Mastery](https://youtu.be/_oO4Qi5aVZs): This source provided me with the inspiration for the homepage design of the project. 
- [Tailwind CSS](https://tailwindcss.com): This source taught me how to use Vite as a build tool for React.js and Tailwind CSS projects.
