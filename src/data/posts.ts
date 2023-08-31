import {User, users} from './user'


export interface Post {
    title: string,
    description: string,
    pubDate: string,
    tags: string[],
    author: User
}

export const posts :Post[] = [
    {
        title: 'How Apple’s M1 Chips Make macOS Developement Much Less Costly',
        description: 'Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        pubDate: 'June 09, 2023 - 01:10 PM',
        tags: ['Development', 'Design'],
        author: users[0]
    },
    {
        title: 'How Apple’s M1 Chips Make macOS Developement Much Less Costly',
        description: 'Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        pubDate: 'June 09, 2023 - 01:10 PM',
        tags: ['Development', 'Design'],
        author: users[0]
    },
    {
        title: 'How Apple’s M1 Chips Make macOS Developement Much Less Costly',
        description: 'Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        pubDate: 'June 09, 2023 - 01:10 PM',
        tags: ['Development', 'Design'],
        author: users[0]
    },
    {
        title: 'How Apple’s M1 Chips Make macOS Developement Much Less Costly',
        description: 'Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        pubDate: 'June 09, 2023 - 01:10 PM',
        tags: ['Development', 'Design'],
        author: users[0]
    }
]