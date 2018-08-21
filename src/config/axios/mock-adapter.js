import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const configureAxiosMockAdapter = () => {
    // Creating a mock instance with a delay response
    const mock = new MockAdapter(axios, { delayResponse: 1000 });

    mock.onPost('/login').reply(200, {token: 'test-token'});
    // mock.onPost('/login').reply(400, {}); // Failure


    // Passing through all other endpoints
    mock.onAny().passThrough();
};

export default configureAxiosMockAdapter;
