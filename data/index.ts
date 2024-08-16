export type Post = {
    id: number;
    author: string;
    time: string;
    profile: string;
    emoji: string;
    content: string;
    comments: string;
};

export const posts: Post[] = [
    {
        id: 1,
        author: 'Theresa Webb',
        time: "5 mins ago",
        profile:'/girl.png',
        emoji: '/hand.png',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        comments: '24 comments'
    },
    {
        id: 2,
        author: 'Marvin McKinney',
        time: "8 mins ago • Edited",
        profile:'/baldguy.png',
        emoji: '/sad.png',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        comments: '23 comments'
    }
]