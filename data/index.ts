export type Post = {
    id: number;
    author: string;
    time: string;
    profile: string;
    emoji: string;
    content: string;
    comments: string;
    createdAt: string;
};

export const posts: Post[] | undefined = [
    {
        id: 1,
        author: 'Theresa Webb',
        time: "Theresssa",
        profile:'/girl.png',
        emoji: '/hand.png',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        comments: '24 comments',
        createdAt: '2024-08-18T12:00:00Z'
    },
    {
        id: 2,
        author: 'Marvin McKinney',
        time: "MarMc",
        profile:'/baldguy.png',
        emoji: '/sad.png',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        comments: '23 comments',
        createdAt: '2024-08-18T12:00:00Z'
    }
]