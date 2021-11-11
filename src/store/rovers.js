import axios from 'axios';

export default {
    actions: {
        async getPhotos({ }, payload) {
            let data = []
            for (let i = 0; i < payload.selectedCameras.length; i++) {
               axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${payload.name}/photos?sol=${payload.sol}&api_key=7WskQdRO3bzwXB28axpyTi6Mk7VepuqhJV01kgzV&camera=${payload.selectedCameras[i]}`)
                    .then(response => {
                        data.push(...response.data.photos)
                    })
                    .catch(e => {
                        throw e
                    })
            }
            return data;
        }
    }
}