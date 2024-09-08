export const
    LOGO_URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const
    USER_ICON = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ3SFVmXoYNHl2D22fjIEAwMuEqrbDYiUUwsWi6-K0AEnh9QZzAhgaOayZ6hFG4Eh_1m4&usqp=CAU";


export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_THEMOVIEDB_BEARER_TOKEN 
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w400";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
    { identifier: 'eng', name: 'English' },
    { identifier: 'hin', name: 'Hindi' },
    { identifier: 'kan', name: 'Kannada' }
]

export const OPENAI_KEY=process.env.REACT_APP_OPENAI_API_KEY

export const DOMAIN = 'https://netflixgpt.deepanshu-sahu27.workers.dev'