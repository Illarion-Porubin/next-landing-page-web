

import { getProject, updatePhoto, addPicture, deletePhotoAtIndex, updateText, updateUser, updateService } from '@/server/services/project-service';
import { IProject } from '@/types';
import { NextRequest, NextResponse } from 'next/server';


export async function GET() {
  try {
    const content: IProject = await getProject();
    if (!content) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }
    return NextResponse.json(content, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const request = await req.json();
  switch (request.action) {
    case 'updatePhoto':
      try {
        const data = await updatePhoto(request);
        if (!data) {
          return NextResponse.json({ error: 'Content not found' }, { status: 404 });
        }
        return NextResponse.json({ ...data });
      } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }

    case 'deletePhoto':
      try {
        const data = await deletePhotoAtIndex(request);
        if (!data) {
          return NextResponse.json({ error: 'Content not found' }, { status: 404 });
        }
        return NextResponse.json({ ...data });
      } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }

    case 'updateText':
      try {
        const data = await updateText(request);
        if (!data) {
          return NextResponse.json({ error: 'Content not found' }, { status: 404 });
        }
        return NextResponse.json({ ...data });
      } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }

    case 'updateService':
      try {
        const data = await updateService(request);
        if (!data) {
          return NextResponse.json({ error: 'Content not found' }, { status: 404 });
        }
        return NextResponse.json({ ...data });
      } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }

    case 'updateUser':
      try {
        const data = await updateUser(request);
        if (!data) {
          return NextResponse.json({ error: 'Content not found' }, { status: 404 });
        }
        return NextResponse.json({ ...data });
      } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }

    default:
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  }

}

export async function POST(req: NextRequest) {
  const request = await req.json();
  try {
    const data = await addPicture(request);
    if (!data) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }
    return NextResponse.json({ ...data });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
