[![LinkedIn][linkedin-shield]][my-linkedin]

<div align="center">
  <h1 align="center"> Upload Image Api MongoDB Node.js</h1>
</div>

<!-- <img src="/public/example.png" alt="example picture"> -->

<!-- <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a> -->

## About The Project

This is a test project to upload images and save a path to the image in a MongoDB database.

The project was made with Node.js, MongoDB and Multer.

### Built With

- [![Node.js][node-shield]](https://nodejs.org/en/)
- [![MongoDB][mongo-shield]](https://www.mongodb.com/)
- [![Multer][multer-shield]](https://www.npmjs.com/package/multer)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

[![Node.js][node-shield]](https://nodejs.org/en/)

`Tested with Node.js v14.21.0`

### Installation

To run it, you need to install the dependencies with `npm install` and then run it with `npm run dev`. The server will be running on `http://localhost:3001` or in the port that you set in the `.env` file.

## Usage

First, you need a MongoDB database. You can create one in [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

Then, you need to create a `.env` file in the root of the project and add the following variables:

```env
MONGO_URI=your_mongo_uri
```

You can get the URI in the MongoDB Atlas dashboard.

You can also change the port of the server in the `.env` file:

```env
MONGO_URI=your_mongo_uri
PORT=your_port
```

## Endpoints

### GET /

This endpoint test if the server is running.

### POST /upload-image

This endpoint receives a file with the key `image` the `name` of the image and returns the path to the image in the server.

### DELETE /delete/:id/:faleName

This endpoint receives the `id` of the image and the `fileName` and deletes the image from the server and the database.

<!-- ## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish -->

<!-- ## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

[![LinkedIn][linkedin-shield]][my-linkedin]

Lucas Bernardo - lucasbernardo.dev@gmail.com

## Outro

- Original first commit: Oct 22, 2021.

<!-- ## Acknowledgments

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search) -->

<!-- LINKS -->

[my-linkedin]: https://www.linkedin.com/in/lucas-bernardo-94a587182/

<!-- SHIELDS URL -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[nextjs-shield]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[react-shield]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[tailwindcss-shield]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[firebase-shield]: https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black
[node-shield]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[mongo-shield]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[multer-shield]: https://img.shields.io/badge/Multer-4EA94B?style=for-the-badge&logo=multer&logoColor=white
