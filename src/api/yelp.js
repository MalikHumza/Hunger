import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ao-Ovx5mnmjFjU0UL0VZmsGG7UJHjoYEQfwKvLO58W3cy_sGAifi1LXbfrzmRx2aksVkIB3PnG9XnDF1jCxS5GJv4OTM7tz3jrRMFkI8A-pM6AddspcFuY2q5_M3YXYx'
    }
});