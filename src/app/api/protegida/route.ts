import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOption } from "../auth/[...nextauth]/route";

export async function GET() {
    const session = await getServerSession(authOption)
    if(!session) {
        return NextResponse.json({
            message: "Rota não logada"
        })
    }

    return NextResponse.json({
        name: session?.user?.name
    })
}