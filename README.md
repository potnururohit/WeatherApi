# WeatherApi
# WeatherAPI Project

This project is a WeatherAPI application built using JavaScript.

## Description

The WeatherAPI project is a simple application that retrieves weather information based on user input. It uses the OpenWeatherMap API to fetch current weather data for a given location. The application allows users to search for a specific city or location and displays the current temperature, weather conditions, and other relevant information.

## Features

- Search for weather information by city or location.
- Display current temperature, weather conditions, humidity, wind speed, and other data.
- User-friendly interface with a clean and intuitive design.

## Installation

To run this application locally, follow these steps:

1. Clone the repository: https://github.com/potnururohit/WeatherApi.git

2. Navigate to the project directory: `cd weatherapi-project`
3. Install the dependencies: `npm install`

## Usage

1. Obtain an API key from OpenWeatherMap by signing up at https://openweathermap.org/.
2. Create a `.env` file in the project root directory.
3. Add your API key to the `.env` file: `API_KEY=your-api-key`.
4. Start the application: `npm start`.
5. Open your web browser and navigate to `http://localhost:3000`.
6. Enter a city or location in the search bar and click the search button.
7. View the weather information for the specified location.

## Dependencies

This project utilizes the following dependencies:

- axios: "^0.21.1" - A promise-based HTTP client for making API requests.
- dotenv: "^10.0.0" - Loads environment variables from a `.env` file into `process.env`.
- express: "^4.17.1" - A minimal and flexible web application framework for Node.js.

## Contributing

Contributions are welcome! If you find any issues or would like to suggest improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
