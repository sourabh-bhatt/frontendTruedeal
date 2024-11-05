export const users = [
    { id: 1, name: 'Rome' },
    { id: 2, name: 'Paris' },
]

export async function GET() {
    return Response.json(users);
};
export async function POST() { };

