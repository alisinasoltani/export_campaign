enum Role {
    "USER",
    "ADMIN",
    "MODERATOR"
}

interface color {
    name: string
    type: "dark" | "light"
    color: string
}

interface fontfamily {
    name: string
    css_class: string
}

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
    fontSize: number;
    fontFamily: string;
}

interface selectedStyle {
    background_color_index: number
    font_index: number
    font_size: number
    line_height: number
}

interface ServiceProps {
    title: string;
    subtitle: string;
    description: string;
    isNew: boolean;
    img: string;
    href: string;
    btnTitle: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    passwordHash: string;
    role: Role;
    reputation: number;
    createdAt: Date;
    lastLogin: Date;
    banned: Boolean;
    questions: Question[];
    answers: Answer[];
    comments: Comment[];
    votes: Vote[]
}

interface Question {
    id: number;
    title: string;
    body: string;
    createdAt: Date;
    viewCount: number;
    voteCount: number;
    closed: Boolean;
    author: User;
    authorId: number;
    answers: Answer[];
    comments: Comment[];
    tags: Tag[];
    votes: Vote[];
}

interface Answer {
    id: number;
    body: string;
    createdAt: Date;
    voteCount: number;
    accepted: Boolean;
    author: User;
    authorId: number;
    question: Question;
    questionId: number;
    comments: Comment[];
    votes: Vote[];
}

interface Tag {
    id: number;
    name: string;
    questions: Question[];
}

interface Vote {
    id: number;
    type: string; // "up" or "down"
    user: User;
    userId: number;
    targetType: string; // "question" or "answer"
    targetId: number;
    createdAt: Date;
}

interface ChapterData {
    id: number;
    title: string;
}

interface SectionData {
    title: string;
    content: string;
    // tags: string;
    isVisible?: Boolean;
    chapterId: number;

}

interface FrequentQuestions {
    id: number;
    title: string;
    body: string;
    createdAt: string;
    viewCount: number;
    closed: boolean;
    answers: string[];
    author: string;
    authorId: number;
    tags: string[];
}

export type { color, fontfamily, TabPanelProps, selectedStyle, ServiceProps, 
Question, User, Answer, Tag, Vote, ChapterData, SectionData, FrequentQuestions };