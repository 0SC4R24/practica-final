import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';

export async function GET() {
    try{
        const adminsCommerces = JSON.parse(readFileSync("data/adminsCommerces.txt"));
        return NextResponse.json({adminsCommerces});
    } catch(e){  
        return NextResponse.json({message: "adminsCommerces.txt no existen...", status: 400, error: e});
    }
}

export async function POST(request) {
    const data = await request.json();

    try {
        const filePath = 'data/adminsCommerces.txt';
        const adminsCommerces = JSON.parse(readFileSync(filePath));

        writeFileSync(filePath, JSON.stringify([...adminsCommerces, data]));

        console.log('Data added successfully.');
    } catch (error) {
        console.error('Error adding data:', error);
    }
}