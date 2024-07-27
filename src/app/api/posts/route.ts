import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Post from "@/models/postModel";

connect();

export async function GET(request: NextRequest) {
  try {
    const posts = await Post.find()
      .populate("user", "username")
      .sort({ createdAt: -1 })
      .limit(20);
    return NextResponse.json({ posts });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
