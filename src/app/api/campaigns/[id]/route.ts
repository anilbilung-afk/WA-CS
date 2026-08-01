import { NextResponse } from "next/server";

// Type definition for route parameters in Next.js 15
type RouteParams = {
  params: Promise<{ id: string }>;
};

// GET /api/campaigns/[id]
export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params;

    // TODO: Add your logic (e.g., fetch campaign from Supabase/DB)
    // const { data, error } = await supabase.from('campaigns').select('*').eq('id', id).single();

    return NextResponse.json({
      message: `Successfully fetched campaign ${id}`,
      id,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch campaign" },
      { status: 500 }
    );
  }
}

// PUT /api/campaigns/[id]
export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();

    // TODO: Add your update logic here

    return NextResponse.json({
      message: `Successfully updated campaign ${id}`,
      id,
      updatedData: body,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update campaign" },
      { status: 500 }
    );
  }
}

// DELETE /api/campaigns/[id]
export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params;

    // TODO: Add your delete logic here

    return NextResponse.json({
      message: `Successfully deleted campaign ${id}`,
      id,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete campaign" },
      { status: 500 }
    );
  }
}
