interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = (url: string): Promise<Response> => {
    return fetch(url);
};

const setCommentsFormat = (comments: Comment[]): void => {
    comments.forEach(comment => {
        console.log(`ID: ${comment.id}, Email: ${comment.email}`);
    });
};

getData(COMMENTS_URL)
    .then(data => {
        return data.json();
    })
    .then(comments => {
        setCommentsFormat(comments);
    })
    .catch(error => {
        console.log(error);
    });
