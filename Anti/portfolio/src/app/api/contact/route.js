import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Simulate sending email or saving to DB
        console.log('Contact Form Submission:', { name, email, message });

        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error sending message' }, { status: 500 });
    }
}
