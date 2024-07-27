import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Story from "@/models/storyModel";

connect();

export async function GET(request: NextRequest) {
  try {
    const stories = await Story.find()
      .populate("user", "username")
      .sort({ createdAt: -1 })
      .limit(10);
    return NextResponse.json({ stories });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
