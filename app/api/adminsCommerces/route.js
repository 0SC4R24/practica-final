import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';

export async function GET() {
    try{
        const adminsCommerces = JSON.parse(readFileSync("data/adminsCommerces.json"));
        return NextResponse.json({adminsCommerces});
    } catch(e){  
        return NextResponse.json({message: "adminsCommerces.json no existen...", status: 400, error: e});
    }
}

export async function POST(request) {
    const data = await request.json();

    try {
        const filePath = 'data/adminsCommerces.json';
        const adminsCommerces = JSON.parse(readFileSync(filePath));

        writeFileSync(filePath, JSON.stringify([...adminsCommerces, data]));

        console.log('Data added successfully.');
    } catch (error) {
        console.error('Error adding data:', error);
    }

    return NextResponse.json({message: "adminsCommerces.json actualizado correctamente...", status: 200});
}

export async function DELETE(request) {
    const data = await request.json();
    try {
        const addminsCommerces = JSON.parse(readFileSync("data/adminsCommerces.json"));
        const updatedAdminsCommerces = addminsCommerces.filter((commerce) => commerce.cif !== data.deleteCard.cif);
        writeFileSync("data/adminsCommerces.json", JSON.stringify(updatedAdminsCommerces));
        return NextResponse.json({message: "adminsCommerces.json actualizado correctamente...", status: 200});
    } catch(e){  
        console.log(e);
    }
}