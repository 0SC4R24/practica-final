import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';

export async function GET() {
    try{
        const adminsCommerces = JSON.parse(readFileSync("data/adminsCommerces.json"));
        return NextResponse.json({adminsCommerces});
    } catch(e){  
        return NextResponse.json({message: "adminsCommerces.json does not exist...", status: 400, error: e});
    }
}

export async function POST(request) {
    const data = await request.json();

    try {
        const filePath = 'data/adminsCommerces.json';
        const adminsCommerces = JSON.parse(readFileSync(filePath));

        writeFileSync(filePath, JSON.stringify([...adminsCommerces, data]));

        console.log('Data added successfully to adminsCommerces.json');
    } catch (error) {
        console.error('Error adding data:', error);
    }

    return NextResponse.json({message: "adminsCommerces.json updated correctly...", status: 200});
}

export async function DELETE(request) {
    const data = await request.json();
    try {
        const adminsCommerces = JSON.parse(readFileSync("data/adminsCommerces.json"));
        const updatedAdminsCommerces = adminsCommerces.filter((commerce) => commerce.id !== data.id);
        writeFileSync("data/adminsCommerces.json", JSON.stringify(updatedAdminsCommerces));
        return NextResponse.json({message: "adminsCommerces.json updated correctly...", status: 200});
    } catch(e){  
        console.log(e);
    }
}