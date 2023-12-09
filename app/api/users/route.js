import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';

export async function GET() {
    try{
        const users = JSON.parse(readFileSync("data/users.json"))
        return NextResponse.json({users})
    } catch(e){  
        return NextResponse.json({message: "users.json no existen...", status: 400})
    }
}

export async function POST(request) {
    const data = await request.json();
    
    try {
        const users = JSON.parse(readFileSync("data/users.json"));

        writeFileSync("data/users.json", JSON.stringify([...users, data]));

        console.log("Data added successfully.");
    } catch (error) {
        writeFileSync("data/users.json", JSON.stringify([data]));
    }

    return NextResponse.json({message: "users.json actualizado correctamente...", status: 200});
}